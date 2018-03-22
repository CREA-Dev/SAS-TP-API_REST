// Définition d'une structure de données JSON
const data = {
  title: "Cours BDWA - SAS",
  author: "Tim Izzo",
  articles: [
    {
      title: "Mon premier article",
      content: "Je suis le contenu du premier article",
    },
    {
      title: "Mon deuxième article",
      content: "Contenu du deuxième article",
    },
  ],
  images: {
    firstImage: {
      url:
        "https://www.creageneve.com/wp-content/themes/crea/assets/pics/logo.png",
      description: "Logo de Crea",
    },
    secondImage: {
      url:
        "http://fixnation.org/wordpress/wp-content/uploads/2014/03/cats-kittens_00379052.jpg",
      description: "Chat chou",
    },
  },
};

// Lire des valeurs et les afficher
console.log(data.author); // String
console.log(data.articles); // Array
console.log(data.articles[0]); // Object
console.log(data.articles[0].content); // String
console.log(data.images); // Object
console.log(data.images.firstImage); // Object
console.log(data.images["firstImage"]); // Object
console.log(data.images.secondImage.url); // String

// Déclarer une fonction
const uppercase = text => {
  const uppercaseText = text.toUpperCase();
  return uppercaseText;
};

// Utiliser une fonction
const resultat = uppercase(data.author);
console.log(`Résultat de la fonction uppercase: ${resultat}`);

// Conditions
if (data.title == "Mon blog") {
  console.log("Ce site a pour titre 'Mon blog'");
} else {
  console.log("Ce site n'est pas un blog");
}

// Boucles
for (let i = 0; i < data.articles.length; i++) {
  console.log(`\nArticle n°${i}`);
  console.log(data.articles[i]);
}

// Ajouter un élément à la fin d'un tableau
const nouvelArticle = {
  title: "Je suis un nouvel article",
  lien: "http://localhost:8080/?index=3",
};
data.articles.push(nouvelArticle);

// Supprimer un élément d'un tableau
delete data.articles[1]; // Pas très propre car laisse un emplacement vide
data.articles = data.articles.filter((article, index) => index !== parseInt("1")); // Propre mais plus compliqué à comprendre
