var pokeapiService = require('./services/pokeapi-service');
var pokeapiUtils = require('./utils/pokeapi-utils');
var app = require('./config/custom-express')();

app.listen(process.env.PORT || 3000, () => {
    console.log("\x1b[32m", "Executando em: \nhttp://localhost:3000/");
    console.log("\x1b[0m");
});

app.post('/webhook', (req, res) => {
    console.log(req.body);

    var pokemonName = pokeapiUtils.getNameFromRequest(req.body);

    var response = null;

    pokeapiService
        .getPokemonInfo(pokemonName)
        .then((pokemonInfo) => {
            response = pokeapiUtils.montaResponse(pokemonInfo);
        })
        .catch((err) => {
            response = pokeapiUtils.montaErrorResponse(err);
        })
        .finally(() => {
            console.log(response);
            res.json(response);
        });
});