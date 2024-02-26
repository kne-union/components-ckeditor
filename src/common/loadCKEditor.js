import { createWithFetch } from '@kne/react-fetch';
import { getOrLoadRemote, getPublicPath } from '@kne/remote-loader';

const loadCKEditor = createWithFetch({
  loading: null,
  loader: async () => {
    await getOrLoadRemote('ClassicEditor', '', getPublicPath('components-ckeditor') + '/ckeditor/ckeditor.js');
    return { CKEditor: window.ClassicEditor };
  }
});

export default loadCKEditor;
