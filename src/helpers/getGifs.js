//Funcion asincrona que realiza la peticion de gif
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=24KT2HQa6dwV7OR4TNCkWFHvhETCYlnf`;  // encodeURI() elimina los espacios en blanco e remplaza algunos caracteres en los campos que estan llegando
    const response = await fetch( url );
    const { data } = await response.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }) 

    return gifs;
}