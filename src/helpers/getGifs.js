


export const getGifs = async(catergory) => {
   
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(catergory) }&limit=10&api_key=PQ6fcOculfDGjITtGNxYJtZ7v8PyTpRk`;
    const resp = await fetch ( url );
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;

}