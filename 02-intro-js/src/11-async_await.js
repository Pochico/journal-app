// 11. Async - Await
console.log("ASYNC - AWAIT_______________________________");

const apiKey = "c1Dnkr8N7X24C1l4byJF5euxflDTYg1t";
const apiRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

const getData = async () => {
    try {
        const resp = await apiRequest;
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement("img");

        img.src = url;
        document.body.append(img);
    } catch (err) {
        console.error(err);
    }
};

getData();
