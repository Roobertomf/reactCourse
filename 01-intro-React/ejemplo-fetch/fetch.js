const apiKey = "A259aSTmX81StaHKJddbn4f1SgYVsDF3";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    //img.src = url
    img.setAttribute("src", url);

    document.body.append(img);
  });
