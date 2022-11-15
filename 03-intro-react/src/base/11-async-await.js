

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = "c1Dnkr8N7X24C1l4byJF5euxflDTYg1t";
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

        return url;

    } catch (error) {
        // manejo del error
        console.error(error);
    }
    
    
    
}

getImagen();

export default getImagen;

