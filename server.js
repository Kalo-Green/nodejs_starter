// Import des packages nécessaire
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Afficher  hello world
app.get('/', (req, res) => {
    res.send('Hello World !');
});

// Lancement du serveur
const PORT = process.env.PORT || 5600;

// Définir une fonction pour lancer le serveur
const start = async () => {

    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();
