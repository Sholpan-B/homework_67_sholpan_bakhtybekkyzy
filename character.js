const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  .then((response) => response.json())
  .then((character) => {
    const characterContainer = document.querySelector('#character-details');
    console.log(character);
    characterContainer.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>Species: ${character.species}</p>
      <p>Status: ${character.status}</p>
      <p>Gender: ${character.gender}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Last seen in: ${character.location.name}</p>
    `;
  });

