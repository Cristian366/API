const noticias = document.getElementById('noticias')
const noticia = document.getElementById('noticia').content
const fragment = document.createDocumentFragment()


let news = []

document.addEventListener('DOMContentLoaded', () => {
    CargaNoticias()
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '038de8e34amshc0ea4e0bac5fef3p1817edjsnbc980d3ccc7b',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

fetch('https://hotels4.p.rapidapi.com/v2/get-meta-data', options)
	.then(response => response.json())
	.then(response => {
        news = response
        dibujaNoticias()
        console.log(response)
    })
	.catch(err => console.error(err));

    const dibujaNoticias = () => {
        news.forEach((item) => {
            noticia.querySelector('img').setAttribute('scr', itemm.Image)
            noticia.querySelector('p').textContent = item.Title 

            const clone = noticia.clonNode(true)
            frameElement.appendChild(clone)
        })
        noticias.appendChild(fragment)
    }