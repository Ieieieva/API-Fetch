// Kāpēc neder, ja raksta arrow function (displayData)?


fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then(displayData);

  function displayData(data: any) {
    const characters = data.results;
    console.log(characters);
    
    const cardsContainer = document.querySelector<HTMLDivElement>('.cards__container')

    characters.forEach((character: any) => {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const statusSpecies = document.createElement('h4');
        const status = document.createElement('h4')
        const species = document.createElement('h4')
        const symbol = document.createElement('div')
        const location = document.createElement('h4')
        const origin = document.createElement('h4');
        const episode = document.createElement('h4');


        cardsContainer.appendChild(card)

        card.classList.add('card');
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(statusSpecies);
        card.appendChild(location);
        card.appendChild(origin);


        image.classList.add('card__image');
        image.src = character.image;
        
        name.classList.add('card__name');
        name.innerHTML = character.name;

        statusSpecies.classList.add('cards__status-species');

        statusSpecies.appendChild(symbol)
        statusSpecies.appendChild(status)
        statusSpecies.appendChild(species)

        status.classList.add('card__status');
        species.classList.add('card__species')

        status.innerHTML = character.status;
        species.innerHTML = `${'- ' + character.species}`;

        if (character.status === 'Alive') {
            symbol.classList.add('point--green')
        } else if (character.status === 'unknown') {
            symbol.classList.add('point--orange')
        } else {
            symbol.classList.add('point--red')
        }
        
        location.classList.add('card__location');
        location.innerHTML = `Last known location: ${character.location.name}`;

        origin.classList.add('card__origin')
        origin.innerHTML = `Origin: ${character.origin.name}`;
    })
}