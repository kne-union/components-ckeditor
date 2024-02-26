import {useState} from "react";
import style from "./style.module.scss";
import {
    createWithRemoteLoader, getOrLoadRemote, getPublicPath,
} from "@kne/remote-loader";
import {createWithFetch} from "@kne/react-fetch";
import {CKEditor as CKEditorReact} from "@ckeditor/ckeditor5-react";
import classnames from "classnames";
import useControlValue from "@kne/use-control-value";
import {App} from "antd";
import OssUploadAdapterPlugin from "@components/OssUploadAdapterPlugin";
import './ckeditor.scss';

const CKContent = ({className, value}) => {
    return (<div
        className={classnames("ck ck-content", className)}
        dangerouslySetInnerHTML={{__html: value}}
    />);
};

const Preset = createWithRemoteLoader({
    modules: ["components-core:Global@usePreset"],
})(({remoteModules, children}) => {
    const [usePreset] = remoteModules;
    const preset = usePreset();
    return children(preset);
});

const CKEditorField = createWithFetch({
    loading: null, loader: async () => {
        await getOrLoadRemote("ClassicEditor", "", getPublicPath("components-ckeditor") + "/ckeditor/ckeditor.js");
        return {CKEditor: window.ClassicEditor};
    },
})(({className, config, data, maxLength, ...props}) => {
    const [value, onChange] = useControlValue(props);
    const {CKEditor} = data;
    const [currentCharacters, setCurrentCharacters] = useState(0);
    const {message} = App.useApp();

    return (<div className={classnames(className, style["editor"])}>
        <Preset>
            {({apis}) => {
                return (<CKEditorReact
                    {...props}
                    config={Object.assign({
                        message, ossUpload: {
                            upload: apis.ossStaticUpload, transform: apis.ossStaticTransform,
                        },
                    }, config, {
                        extraPlugins: [OssUploadAdapterPlugin],
                    })}
                    editor={CKEditor}
                    data={value}
                    onReady={(editor) => {
                        const wordCountPlugin = editor.plugins.get("WordCount");
                        setCurrentCharacters(wordCountPlugin.characters);
                    }}
                    onChange={(event, editor) => {
                        const wordCountPlugin = editor.plugins.get("WordCount");
                        if (maxLength && wordCountPlugin.characters > maxLength) {
                            message.error("输入内容超过最大字符限制");
                            editor.setData(value);
                            return;
                        }
                        setCurrentCharacters(wordCountPlugin.characters);
                        const data = editor.getData();
                        onChange(data);
                    }}
                />);
            }}
        </Preset>
        <div className={style["word-count"]}>
            <div>当前字符:{currentCharacters}</div>
            <div
                className={classnames(style["surplus-count"], maxLength && {
                    [style["error"]]: maxLength - currentCharacters < 50,
                })}
            >
                剩余字符:{maxLength - currentCharacters}
            </div>
        </div>
    </div>);
});

CKEditorField.defaultProps = {
    maxLength: 5000, config: {
        wordCount: {displayWords: false}, toolbar: {
            items: ["undo", "redo", "|", "heading", "style", "|", "bold", "italic", "underline", "strikethrough", "link", "bulletedList", "numberedList", "todoList", "fontBackgroundColor", "fontColor", "fontSize", "|", "alignment", "pageBreak", "outdent", "indent", "|", "specialCharacters", "subscript", "superscript", "|", "imageUpload", "blockQuote", "insertTable", "highlight", "horizontalLine", "|", "selectAll", "removeFormat"],
        }, list: {
            properties: {
                styles: true, startIndex: true, reversed: true,
            },
        }, style: {
            definitions: [{
                name: "主标题", element: "h2", classes: ["primary-part-title"],
            }, {
                name: "副标题", element: "h3", classes: ["part-title"],
            }, {
                name: "段落内容", element: "p", classes: ["part-content"],
            }, {
                name: "卡片", element: "p", classes: ["card"],
            }, {
                name: "重要卡片", element: "p", classes: ["primary-card"],
            }, {
                name: "关键字", element: "span", classes: ["key-word"],
            },],
        },
    },
};

const CKEditor = createWithRemoteLoader({
    modules: ["components-core:FormInfo@hooks"],
})(({remoteModules, ...props}) => {
    const [hooks] = remoteModules;
    const {useDecorator} = hooks;
    const render = useDecorator(Object.assign({placeholder: `请输入${props.label}`}, props));
    return render(CKEditorField);
});

CKEditor.Field = CKEditorField;
CKEditor.Content = CKContent;
export default CKEditor;
