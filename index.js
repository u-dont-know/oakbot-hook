var app = require('./config/custom-express')();

app.listen(3000, () => {
    console.log("\x1b[32m", "Executando em: \nhttp://localhost:3000/");
    console.log("\x1b[0m");
});

app.post('/webhook', (req, res) => {
    console.log(req.body);

    var response = {
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
            {
                "card": {
                    "title": "card title",
                    "subtitle": "card text",
                    "imageUri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    "buttons": [
                        {
                            "text": "Oi gracinha! Este é um teste!",
                            "postback": "https://assistant.google.com/"
                        }
                    ]
                }
            }
        ]
    };

    res.json(response);
});