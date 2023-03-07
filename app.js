let news = []

document.addEventListener('DOMContentLoaded', () => {
    CargaNoticias()
})

const cargaNoticia () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '038de8e34amshc0ea4e0bac5fef3p1817edjsnbc980d3ccc7b',
            'X-RapidAPI-Host': 'football98.p.rapidapi.com'
        }
    };
    
    fetch('https://football98.p.rapidapi.com/premierleague/news', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}