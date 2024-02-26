/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {ClassicEditor} from '@ckeditor/ckeditor5-editor-classic';

import {Alignment} from '@ckeditor/ckeditor5-alignment';
import {Autoformat} from '@ckeditor/ckeditor5-autoformat';
import {Bold, Italic, Strikethrough, Subscript, Superscript, Underline} from '@ckeditor/ckeditor5-basic-styles';
import {BlockQuote} from '@ckeditor/ckeditor5-block-quote';
import {CloudServices} from '@ckeditor/ckeditor5-cloud-services';
import {CodeBlock} from '@ckeditor/ckeditor5-code-block';
import {Essentials} from '@ckeditor/ckeditor5-essentials';
import {FontBackgroundColor, FontColor, FontSize} from '@ckeditor/ckeditor5-font';
import {Heading} from '@ckeditor/ckeditor5-heading';
import {Highlight} from '@ckeditor/ckeditor5-highlight';
import {HorizontalLine} from '@ckeditor/ckeditor5-horizontal-line';
import {HtmlEmbed} from '@ckeditor/ckeditor5-html-embed';
import {
    AutoImage,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload
} from '@ckeditor/ckeditor5-image';
import {Indent, IndentBlock} from '@ckeditor/ckeditor5-indent';
import {AutoLink, Link, LinkImage} from '@ckeditor/ckeditor5-link';
import {List, ListProperties, TodoList} from '@ckeditor/ckeditor5-list';
import {MediaEmbed} from '@ckeditor/ckeditor5-media-embed';
import {PageBreak} from '@ckeditor/ckeditor5-page-break';
import {Paragraph} from '@ckeditor/ckeditor5-paragraph';
import {PasteFromOffice} from '@ckeditor/ckeditor5-paste-from-office';
import {RemoveFormat} from '@ckeditor/ckeditor5-remove-format';
import {SourceEditing} from '@ckeditor/ckeditor5-source-editing';
import {
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersText
} from '@ckeditor/ckeditor5-special-characters';
import {Table, TableCellProperties, TableColumnResize, TableProperties, TableToolbar} from '@ckeditor/ckeditor5-table';
import {TextTransformation} from '@ckeditor/ckeditor5-typing';
import {WordCount} from '@ckeditor/ckeditor5-word-count';

import {Style} from '@ckeditor/ckeditor5-style';
import {GeneralHtmlSupport} from '@ckeditor/ckeditor5-html-support';
import {SelectAll} from '@ckeditor/ckeditor5-select-all';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
    static builtinPlugins = [
        Alignment,
        AutoImage,
        AutoLink,
        Autoformat,
        BlockQuote,
        Bold,
        CloudServices,
        CodeBlock,
        Essentials,
        FontBackgroundColor,
        FontColor,
        FontSize,
        Heading,
        Highlight,
        HorizontalLine,
        HtmlEmbed,
        Image,
        ImageCaption,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        LinkImage,
        Indent,
        IndentBlock,
        Italic,
        Strikethrough,
        Link,
        List,
        ListProperties,
        MediaEmbed,
        PageBreak,
        Paragraph,
        PasteFromOffice,
        RemoveFormat,
        SourceEditing,
        SpecialCharacters,
        SpecialCharactersArrows,
        SpecialCharactersCurrency,
        SpecialCharactersEssentials,
        SpecialCharactersText,
        Subscript,
        Superscript,
        Table,
        TableCellProperties,
        TableColumnResize,
        TableProperties,
        TableToolbar,
        TextTransformation,
        TodoList,
        Underline,
        WordCount,
        GeneralHtmlSupport,
        Style,
        SelectAll
    ];

    static defaultConfig = {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'link',
                'bulletedList',
                'numberedList',
                'todoList',
                'fontBackgroundColor',
                'fontColor',
                'fontSize',
                '|',
                'alignment',
                'pageBreak',
                'outdent',
                'indent',
                '|',
                'specialCharacters',
                'subscript',
                'superscript',
                '|',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'codeBlock',
                'htmlEmbed',
                'highlight',
                'horizontalLine',
                '|',
                'selectAll',
                'removeFormat',
                'sourceEditing'
            ]
        },
        language: 'zh-cn',
        image: {
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                '|',
                'resizeImage:25',
                'resizeImage:50',
                'resizeImage:75',
                'resizeImage:original',
                '|',
                'linkImage'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties'
            ]
        },
        htmlSupport: {
            allow: [
                {name: 'div', classes: true, styles: true}
            ]
        }
    };
}

export default Editor;
