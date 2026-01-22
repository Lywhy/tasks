'use strict';

const req =  new XMLHttpRequest();
req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
req.send();
req.addEventListener('load', function() {
    if (req.status > 199 && req.status < 300) {

        const {abilities} = JSON.parse(req.response);

        const reqEn = new XMLHttpRequest();
        reqEn.open('GET', abilities[0].ability.url);
        reqEn.send();
        reqEn.addEventListener('load', function() {
            if (reqEn.status > 199 && reqEn.status < 300) {
                const {effect_entries} = JSON.parse(reqEn.response);
                for (const ef of effect_entries) {
                    if (ef.language.name === 'en') {
                        console.log(ef.effect)
                    }
                }
            } else {
                console.error(`Request status error: ${reqEn.status}`)
            }
        })
    } else {
        console.error(`Request status error: ${req.status}`)
    }
})