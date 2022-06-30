console.log('hola');
/* 
BACKUP OF "thecatapi" IF YOU WANT CHANGE THE URL API
'https://api.thecatapi.com/v1/images/search'
*/
const URL ='https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById("randomCats");
        img.src = data[0].url
    });