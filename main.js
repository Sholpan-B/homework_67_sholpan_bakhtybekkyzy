fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => Cards(data.results));

function Cards(char) {
    const cardContainer = document.querySelector('#card-group')
    console.log(char)
    char.forEach(character => {
        cardContainer.innerHTML += 
        `
        <a href="character.html?id=${character.id}" class="card">
        <h2>${character.name}</h2>
        <img src=${character.image} class="card-img-top"></img>
        </a>
        
        <br>
        `;
              
    })
};

