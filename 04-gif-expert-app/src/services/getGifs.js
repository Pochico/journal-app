

export const getGifs = async (category) => {
    const apiKey = "c1Dnkr8N7X24C1l4byJF5euxflDTYg1t";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=10`);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
};
