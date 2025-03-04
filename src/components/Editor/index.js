import {useState} from 'react';
import style from './style.module.scss';
import {createWithRemoteLoader} from '@kne/remote-loader';
import {loader as ckEditorLoader} from '../../common/loadCKEditor';
import Fetch from '@kne/react-fetch';
import {CKEditor as CKEditorReact} from '@ckeditor/ckeditor5-react';
import classnames from 'classnames';
import useControlValue from '@kne/use-control-value';
import OssUploadAdapterPlugin from '@components/OssUploadAdapterPlugin';
import {App} from 'antd';
import merge from 'lodash/merge';
import './ckeditor.scss';

const CKContent = ({className, children}) => {
    return <div className={classnames('ck ck-content', className)} dangerouslySetInnerHTML={{__html: children}}/>;
};

const defaultEditorConfig = {
    wordCount: {displayWords: false}, toolbar: {
        items: ['undo', 'redo', '|', 'heading', 'style', '|', 'bold', 'italic', 'underline', 'strikethrough', 'link', 'bulletedList', 'numberedList', 'todoList', 'fontBackgroundColor', 'fontColor', 'fontSize', '|', 'alignment', 'pageBreak', 'outdent', 'indent', '|', 'specialCharacters', 'subscript', 'superscript', '|', 'imageUpload', 'blockQuote', 'insertTable', 'highlight', 'horizontalLine', '|', 'selectAll', 'removeFormat']
    }, list: {
        properties: {
            styles: true, startIndex: true, reversed: true
        }
    }, style: {
        definitions: [{
            name: 'Headings', element: 'h2', classes: ['primary-part-title']
        }, {
            name: 'Subheadings', element: 'h3', classes: ['part-title']
        }, {
            name: 'Paragraph', element: 'p', classes: ['part-content']
        }, {
            name: 'Card', element: 'p', classes: ['card']
        }, {
            name: 'Primary Card', element: 'p', classes: ['primary-card']
        }, {
            name: 'Keywords', element: 'span', classes: ['key-word']
        }]
    }
};

const Editor = ({locale, config, pluginLoaders = [], ...props}) => {
    const {message} = App.useApp();
    return <Fetch {...Object.assign({}, ckEditorLoader, {
        params: {locale}
    })} render={({data}) => {
        const {CKEditor} = data;
        const plugins = pluginLoaders.map(pluginLoader => pluginLoader(CKEditor.libs));
        return <CKEditorReact {...props} editor={CKEditor}
                              config={merge({}, {message}, defaultEditorConfig, config, {extraPlugins: [OssUploadAdapterPlugin, ...plugins]})}/>
    }}/>
};

const CKEditorField = createWithRemoteLoader({
    modules: ['components-core:Global@usePreset']
})(({remoteModules, ...p}) => {
    const [usePreset] = remoteModules;
    const {apis, locale} = usePreset();
    const {className, config, pluginLoaders, data, maxLength, wordCount, ossUpload, ...props} = Object.assign({}, {
        maxLength: 5000, pluginLoaders: [], wordCount: false
    }, p);
    const [value, onChange] = useControlValue(props);
    const [currentCharacters, setCurrentCharacters] = useState(0);
    const {message} = App.useApp();

    return <div className={classnames(className, style['editor'])}>
        <Editor locale={locale} onReady={editor => {
            const wordCountPlugin = editor.plugins.get('WordCount');
            setCurrentCharacters(wordCountPlugin.characters);
        }} data={value} onChange={(event, editor) => {
            const wordCountPlugin = editor.plugins.get('WordCount');
            if (maxLength && wordCountPlugin.characters > maxLength) {
                message.error('输入内容超过最大字符限制');
                editor.setData(value);
                return;
            }
            setCurrentCharacters(wordCountPlugin.characters);
            const data = editor.getData();
            onChange(data);
        }} config={merge({
            ossUpload: {
                upload: apis?.file?.upload, uploadUrl: apis?.file?.uploadUrl
            }
        }, config, {ossUpload})}/>
        {wordCount && <div className={style['word-count']}>
            <div>当前字符:{currentCharacters}</div>
            <div
                className={classnames(style['surplus-count'], maxLength && {
                    [style['error']]: maxLength - currentCharacters < 50
                })}
            >
                剩余字符:{maxLength - currentCharacters}
            </div>
        </div>}
    </div>
});

const CKEditor = createWithRemoteLoader({
    modules: ['components-core:FormInfo@hooks']
})(({remoteModules, ...props}) => {
    const [hooks] = remoteModules;
    const {useDecorator} = hooks;
    const render = useDecorator(Object.assign({}, props));
    return render(CKEditorField);
});

CKEditor.Field = CKEditorField;
CKEditor.Content = CKContent;
CKEditor.defaultEditorConfig = defaultEditorConfig;
export default CKEditor;
