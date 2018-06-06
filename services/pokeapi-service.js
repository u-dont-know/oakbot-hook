const request = require('request');
var Promise = require("bluebird");

module.exports = {

    getPokemonInfo(nome) {

        return new Promise((resolve, reject) => {

            request(
                `https://pokeapi.co/api/v2/pokemon/${nome}/`,
                { json: true },
                (err, res, body) => {
                    console.log(res);
                    
                    if (err || res.statusCode != 200) {
                        if(err) console.log(err);
                        reject("Não foi possível obter informações do pokemon.");
                    }

                    resolve(body);
                });

        });
    },

};