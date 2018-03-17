/*
  Ceci est un module permettant de gérer les items dans une base de données MongoDB.
  Attention, il est nécessaire d'avoir un serveur Mongo qui tourne localement: docker run -d --name test-mongo -p 27017:27017 mongo

  Utilisation:
    - Importer ce module dans server.js en
    rajoutant cette ligne en haut du fichier:
      const mongo = require("./mongo");

  Dans le code, vous pouvez ensuite utiliser ces méthodes:

    mongo.get(2, (item) => { console.log(item)}) // Renvoi l'item n°2
    mongo.add({title: "Titre", content: "Contenu"}) // Ajoute un nouvel item dans la db
    mongo.remove(1) // Supprime l'item n°1 s'il existe
    mongo.update(3, {title: "Nouveau titre", content: "Nouveau contenu"}) // Modifie les valeurs de l'item n°3

*/
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bdwa");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Vous êtes bien connecté à MongoDB");
});

// Définition du modèle Item
const itemSchema = mongoose.Schema({
  title: String,
  content: String,
  url: String,
});
const Item = mongoose.model("Item", itemSchema);

// Définitions des méthodes
const get = (index, callback) => {
  Item.find({}, (err, items) => {
    if (err) {
      console.log(`ERREUR: ${err}`);
      return callback();
    } else {
      if (index >= 0) {
        return callback(items[index]);
      } else return callback(items);
    }
  });
};

const add = (item, callback) => {
  const newItem = new Item(item);
  newItem.save((err, res) => {
    if (err) {
      console.log(`ERREUR: ${err}`);
      return callback({});
    } else {
      return callback(res);
    }
  });
};

const remove = (index, callback) => {
  get(index, item => {
    if (!item) return callback();
    Item.remove({ _id: item._id }, err => {
      if (err) {
        console.log(`ERREUR: ${err}`);
        return callback(false);
      } else {
        return callback(true);
      }
    });
  });
};

const update = (index, item, callback) => {
  get(index, item => {
    if (!item) return callback();
    remove(index, isOkay => {
      if (!isOkay) return callback();
      else {
        add(item);
      }
    });
  });
};

module.exports = {
  get,
  add,
  update,
  remove,
};
