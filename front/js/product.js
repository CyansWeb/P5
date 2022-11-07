//On récupère l'id du canape correspondant dans le lien
const idProduct = new URL(window.location.href).searchParams.get("id");

//On contacte l'API en précisant qu'on est dans le context Id
fetch("http://localhost:3000/api/products/" + idProduct)
    .then(function(response) {
        return response.json();
    })


.then((canape) => {

        //On récupère dans des constantes tous les éléments HTML qu'on va modifier 
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const itemImg = document.getElementsByClassName("item__img");
        let price = document.getElementById("price");


        //On remplace dans le code HTML
        description.innerHTML = canape.description;
        title.innerHTML = canape.name;
        price.innerHTML = canape.price;

        //On initialise une variable text qui contiendra les informations de nos images
        let text = "";
        text = text + `<img src="${canape.imageUrl}"alt ="${canape.altTxt}"></img>`;

        //On précise bien l'index [0] car c'est un selecteur class et non Id donc stocké dans un Array
        itemImg[0].innerHTML = text;


        //On initalise la constante qu'on utilisera pour stocker les couleurs de nos canapés
        const colors = canape.colors;
        let textColors = " ";

        //On crée une boucle pour aller chercher chaque couleur disponible dans l'API
        colors.forEach((colors, index) =>
            textColors = textColors + `<option value="${colors}">${colors}</option>`);

        //On remplace les couleurs dans le menu <option> du HTML
        const colorSelect = document.getElementById("colors");
        colorSelect.innerHTML = textColors

    })
    .catch(function(error) {
        console.error(error)
    })


//------------------------------------------ Stokage des produits dans le LocalStorage ------------------------------------------//

const retourApi = [{
        _id: "ijsdfiojsodfj7df",
        title: "Un premier produit",
        price: 12
    },
    {
        _id: "ijsdfiojsqsdqsd7df",
        title: "Un deuxième produit",
        price: 50
    }
];

function recupererPanier() {
    const panier = [];

    if (!localStorage.getItem("panier")) {
        localStorage.setItem("panier", JSON.stringify(panier));
    }

    return JSON.parse(localStorage.getItem("panier"));
}

function sauvegarderPanier(nouveauPanier) {
    localStorage.setItem("panier", JSON.stringify(nouveauPanier));
}

function ajouterProduitAuPanier(nouveauProduit) {
    const nouveauProduitDuPanier = {
        _id: nouveauProduit._id,
        title: nouveauProduit.title
    };

    const panier = recupererPanier();
    const produitExistant = panier.filter(produit => produit._id === nouveauProduit._id);

    if (produitExistant.length > 0) {
        console.log("j'ai déjà ce produit !");
        return;
    }

    panier.push(nouveauProduitDuPanier);
    sauvegarderPanier(panier);
}

ajouterProduitAuPanier(retourApi[0]);