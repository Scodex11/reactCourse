const API_KEY = "Yg1DaG243rGowdaTjBCvpiQ6GLysl8nX";

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${API_KEY}`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;
};


