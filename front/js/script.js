// Récupérer les produits sur l'API via le port 3000.
const url = "http://localhost:3000/api/products"

// on contacte l'API avec la methode fetch
fetch(url)
    .then((response) => response.json()) // callback then : on récupère les informations de l'API qu'on va mettre au format json
    .then(function(listCanape) {
        const listProducts = document.getElementById("items")

        // Boucle for pour itération de l'ensemble des produits. Parcourir l'ensemble du tableau
        // Ma condition de sortie : index < listCanape.length;
        // Opération de mise à jour = incrémenattion de 1 : index = index + 1

        for (let index = 0; index < listCanape.length; index++) {
            const canape = listCanape[index];

            //console.log(listCanape)

            //Lien vers page produit pour afficher un seul produit
            let text = `<a href="./product.html?id=${canape._id}"> <article> <img src="${canape.imageUrl}" alt="${canape.altTxt}"> <h3 class="productName"> ${canape.name} </h3> <p class="productDescription"> ${canape.description}</p></article>`;
            listProducts.innerHTML += text;
        }

    })
    .catch(function(error) {
        console.error(error)
    });