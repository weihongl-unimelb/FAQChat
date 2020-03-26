import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://ocapi20200225090922.azurewebsites.net/faq');

const myDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        if (resource !== 'QuestionTopics' || !params.data.icon) {
            console.log("old update");
            // fallback to the default implementation
            return dataProvider.update(resource, params);
        }
        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        
        // Freshly dropped pictures are File objects and must be converted to base64 strings
        let newPictures = [];
        let formerPictures = [];
        if(params.data.icon.rawFile instanceof File){
            newPictures.push(params.data.icon);
        }else{
            formerPictures.push(params.data.icon);
        }
        // const newPictures = params.data.icon.filter(
        //     p => p.rawFile instanceof File
        // );
        // const formerPictures = params.data.icon.filter(
        //     p => !(p.rawFile instanceof File)
        // );
        console.log("new update provider");
        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map(picture64 => ({
                    url: picture64,
                    title: `${params.data.title}`,
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        icon: transformedNewPictures[0],
                    },
                    
                })
            );
            
    },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.rawFile);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

export default myDataProvider;