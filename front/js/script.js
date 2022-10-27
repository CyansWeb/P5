// Récupérer les produits sur l'API via le port 3000.
const url = "http://localhost:3000/api/products"
fetch(url) // on va chercher l'API avec la methode fetch
    .then((response) => response.json()) // on récupère les informations de l'API qu'on va mettre au format json
    .then(function(listCanape) {
        const listProducts = document.getElementById("items")

        // à verifier
        for (let index = 0; index < listCanape.length; index++) {
            const canape = listCanape[index];

            let text = `<a href="./product.html?id=${canape._id}"> <article> <img src="${canape.imageUrl}" alt="${canape.altTxt}"> <h3 class="productName"> ${canape.name} </h3> <p class="productDescription"> ${canape.description}</p></article>`;
            listProducts.innerHTML += text;
        }


    })
    .catch(function(error) {
        console.error(error)
    });