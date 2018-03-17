/*
  Ceci est un module permettant de gérer l'authentification par secret partagé
  pour notre API REST.

  Utilisation:
    1) Importer ce module dans server.js en
    rajoutant cette ligne en haut du fichier:
      const auth = require("./auth");
    2) Indiquer à Express de l'utiliser en ajoutant
    cette ligne après le paramètrage d'Express
      app.use(auth);
*/

// Définition du secret qui devra être envoyé par le client
// dans les headers de ses requêtes
const SHARED_SECRET = "7cTcjNyVJyudBqfE";

module.exports = (req, res, next) => {
  const secret = req.headers.secret; // On récupère le secret envoyé par le client dans les headers
  if (secret == SHARED_SECRET) {
    // Si le secret envoyé est correct, on passe au traitement de la requête
    next();
  } else {
    // Si le secret envoyé est faux, on ne va pas plus loin et on renvoi un message d'erreur
    // ainsi qu'une réponse HTTP 401 Unauthorized
    res
      .status(401)
      .send("ERREUR: Vous n'êtes pas autorisés à utiliser cet endpoint\n");
  }
};
