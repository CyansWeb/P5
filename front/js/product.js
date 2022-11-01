// Je veux récupérer l'ID dans l'URL avec URLSearchParams
const idProduct = new URL(window.location.href).searchParams.get("id");

// Puis une 2ème requête fetch au serveur pour afficher les infos du produit 
fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())
    .then((res) => console.log(res))

//Affichage de la photo produit