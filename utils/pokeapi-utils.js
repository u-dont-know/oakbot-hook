module.exports = {

    getNameFromRequest(json) {
        return json.queryResult.queryText.toLowerCase();
    },

    montaResponse(pokemonInfo) {
        return {
            "fulfillmentText": "Retorno Pokeapi.",
            "fulfillmentMessages": [
                {
                    "card": {
                        "title": pokemonInfo.name,
                        "subtitle": this.montaCardText(pokemonInfo),
                        "imageUri": pokemonInfo.sprites.front_default,
                        "buttons": [
                            {
                                "text": "Pokemon encontrado!",
                                "postback": `https://www.pokemon.com/us/pokedex/${pokemonInfo.name}`
                            }
                        ]
                    }
                }
            ]
        };
    },

    montaCardText(pokemonInfo) {
        return `
        ->type(s): ${pokemonInfo.types.map((typeInfo) => typeInfo.type.name).join(", ")}\n
        ->moves: ${pokemonInfo.moves.map((moveInfo) => moveInfo.move.name).join(", ")}\n
        ->abilities: ${pokemonInfo.abilities.map((abilityInfo) => abilityInfo.ability.name).join(", ")}\n
        ->height: ${pokemonInfo.height}\n
        ->weight: ${pokemonInfo.weight}
        `;
    },

    montaErrorResponse(err) {
        return {
            "fulfillmentText": err
        }
    }

};