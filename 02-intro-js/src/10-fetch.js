// 10. fetch API
console.log('FETCH API___________________________');
const apiKey = "c1Dnkr8N7X24C1l4byJF5euxflDTYg1t";
const apiRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

apiRequest
    .then((resp) => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch((err) => console.warn(err));
