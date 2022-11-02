// Je veux récupérer l'ID dans l'URL avec URLSearchParams
const idProduct = new URL(window.location.href).searchParams.get("id");

// Puis une 2ème requête fetch au serveur pour afficher les infos du produit 
fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())
    //.then((res) => console.log(res)) me retourne l'ensemble des éléments
    .then((canape) => {
        // Je vais chercher les éléments HTML à actualiser
        let picture = document.querySelector(".item__img"); // récupère la photo du produit
        let title = document.getElementById("title"); // récupère l'id title du fihier HTML
        let price = document.getElementById("price"); // récupère l'id price
        let description = document.getElementById("description"); // récupère l'id description
        let colors = document.getElementById("colors"); // récupère l'id color

        description.innerHTML = canape.description; //  (NDM innerHTML) récupère ou définit la syntaxe HTML décrivant le descendant de l'élément "description".
    })
    .catch(function(error) {
        console.error(error)
    })