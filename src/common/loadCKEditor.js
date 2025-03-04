import {createWithFetch} from '@kne/react-fetch';
import {getOrLoadRemote, getPublicPath} from '@kne/remote-loader';

export const loader = {
    loading: null, loader: async ({params}) => {
        const locale = params?.locale || 'zh-cn';
        await getOrLoadRemote('ClassicEditor', '', getPublicPath('components-ckeditor') + `/ckeditor/${locale === 'zh-cn' ? 'zh-cn' : 'en'}/ckeditor.js`);
        return {CKEditor: window.ClassicEditor};
    }
};

const loadCKEditor = createWithFetch(loader);

export default loadCKEditor;
