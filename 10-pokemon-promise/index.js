'use strict';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

function getPokeon(url) {
    const result = new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject();
                }
                return response.json();
            })
            .then(data => {
                const { abilities } = data;
                return fetch(abilities[0].ability.url);
            })
            .then(response => {
                if (!response.ok) {
                    reject();
                }
                return response.json();
            })
            .then(data => {
                const { effect_entries } = data;
                for (const ef of effect_entries) {
                    if (ef.language.name === 'en') {
                        console.log(ef.effect)
                    }
                }
            })
            .catch(error => console.error(`Error: ${error}`))
    })
}

getPokeon(url);