import getFileUrl from './getFileUrl.json';

export {getFileUrl};

const preset = {
    locale: 'en-US',
    apis: {
        file: {
            getUrl: {
                loader: () => {
                    return getFileUrl.data;
                }
            },
            upload: ({file}) => {
                return {};
            },
            staticUrl: '/'
        }
    }
};

export default preset;
