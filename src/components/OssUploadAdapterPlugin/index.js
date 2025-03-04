import imgFail from './img_fail.svg';

class OssUploadAdapter {
    constructor(loader, options) {
        this.loader = loader;
        this.options = options;
    }

    async upload() {
        const file = await this.loader.file;
        if (typeof this.options.upload !== 'function') {
            console.warn('当前图片上传为base64模式，正式环境请在preset apis设置file.upload,或者给CKEditor组件传入 config.ossUpload.upload参数');
            const data = await new Promise(resolve => {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.readAsDataURL(file);
            });
            return {
                default: data
            };
        }
        const {code, data, msg} = await this.options.upload({file});
        if (code !== 0) {
            this.options.message.error(msg);
            return {default: imgFail};
        }
        return {
            default: data
        };
    }
}

function OssUploadAdapterPlugin(editor) {
    const message = editor.config.get('message');
    const options = Object.assign({}, {message}, editor.config.get('ossUpload'));
    editor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new OssUploadAdapter(loader, options);
    };
    editor.editing.view.document.on('clipboardInput', (evt, data) => {
        if (editor.isReadOnly) {
            return;
        }

        const dataTransfer = data.dataTransfer;
        const html = dataTransfer.getData('text/html');
        const parser = new DOMParser();
        const domDocument = parser.parseFromString(html, 'text/html');
        if (domDocument.querySelectorAll('img').length === 0) {
            return;
        }
        data.content = editor.data.htmlProcessor.toView('');
        const loadingClose = message.loading('粘贴内容中含有图片，正在进行图片上传...', {duration: 0});
        Promise.all([].slice.call(domDocument.querySelectorAll('img'), 0).map(async img => {
            if (typeof options.uploadUrl !== 'function') {
                console.warn('图片上传失败，请在preset apis设置file.uploadUrl,或者给CKEditor组件传入 config.ossUpload.uploadUrl参数');
                return;
            }
            const {code, data, msg} = await options.uploadUrl({url: img.src});
            if (code !== 0) {
                console.warn(`图片上传失败，${msg}`);
                img.src = imgFail;
                return;
            }
            img.src = data;
        }))
            .then(() => {
                editor.model.insertContent(editor.data.toModel(editor.data.htmlProcessor.toView(domDocument.documentElement.outerHTML)));
            })
            .finally(() => {
                loadingClose();
            });
    });
}

export default OssUploadAdapterPlugin;
