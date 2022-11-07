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