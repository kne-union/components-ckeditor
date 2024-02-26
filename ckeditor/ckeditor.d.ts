export default Editor;
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof AutoImage | typeof AutoLink | typeof Autoformat | typeof BlockQuote | typeof Bold | typeof CloudServices | typeof CodeBlock | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontSize | typeof Heading | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof LinkImage | typeof Indent | typeof IndentBlock | typeof Italic | typeof Strikethrough | typeof Link | typeof List | typeof ListProperties | typeof MediaEmbed | typeof PageBreak | typeof Paragraph | typeof PasteFromOffice | typeof RemoveFormat | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersArrows | typeof SpecialCharactersCurrency | typeof SpecialCharactersEssentials | typeof SpecialCharactersText | typeof Subscript | typeof Superscript | typeof Table | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof TextTransformation | typeof TodoList | typeof Underline | typeof WordCount | typeof GeneralHtmlSupport | typeof Style | typeof SelectAll)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        htmlSupport: {
            allow: {
                name: string;
                classes: boolean;
                styles: boolean;
            }[];
        };
    };
}
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { AutoImage } from "@ckeditor/ckeditor5-image";
import { AutoLink } from "@ckeditor/ckeditor5-link";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Bold } from "@ckeditor/ckeditor5-basic-styles";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FontBackgroundColor } from "@ckeditor/ckeditor5-font";
import { FontColor } from "@ckeditor/ckeditor5-font";
import { FontSize } from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed";
import { Image } from "@ckeditor/ckeditor5-image";
import { ImageCaption } from "@ckeditor/ckeditor5-image";
import { ImageResize } from "@ckeditor/ckeditor5-image";
import { ImageStyle } from "@ckeditor/ckeditor5-image";
import { ImageToolbar } from "@ckeditor/ckeditor5-image";
import { ImageUpload } from "@ckeditor/ckeditor5-image";
import { LinkImage } from "@ckeditor/ckeditor5-link";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { IndentBlock } from "@ckeditor/ckeditor5-indent";
import { Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Strikethrough } from "@ckeditor/ckeditor5-basic-styles";
import { Link } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { ListProperties } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { SpecialCharacters } from "@ckeditor/ckeditor5-special-characters";
import { SpecialCharactersArrows } from "@ckeditor/ckeditor5-special-characters";
import { SpecialCharactersCurrency } from "@ckeditor/ckeditor5-special-characters";
import { SpecialCharactersEssentials } from "@ckeditor/ckeditor5-special-characters";
import { SpecialCharactersText } from "@ckeditor/ckeditor5-special-characters";
import { Subscript } from "@ckeditor/ckeditor5-basic-styles";
import { Superscript } from "@ckeditor/ckeditor5-basic-styles";
import { Table } from "@ckeditor/ckeditor5-table";
import { TableCellProperties } from "@ckeditor/ckeditor5-table";
import { TableColumnResize } from "@ckeditor/ckeditor5-table";
import { TableProperties } from "@ckeditor/ckeditor5-table";
import { TableToolbar } from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { TodoList } from "@ckeditor/ckeditor5-list";
import { Underline } from "@ckeditor/ckeditor5-basic-styles";
import { WordCount } from "@ckeditor/ckeditor5-word-count";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { Style } from "@ckeditor/ckeditor5-style";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
