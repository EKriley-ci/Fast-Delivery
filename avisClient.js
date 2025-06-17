const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const reviewsContainer = document.querySelector(".reviewsContainer");

// index courant
let currentIndex = 0;
let clientsData = [];

// fonction de création dynamique de l'avis client
function renderClientReview(client) {
    reviewsContainer.innerHTML = `
        <div class="cleintsBox">
            <div class="profil">
                <div class="img" style="background-image: url('${client.photo}');"></div>
                <div class="desc">
                    <strong class="name">${client.name}</strong>
                    <img src="${client.rating}" alt="note de ${client.name}">
                </div>
            </div>
            <div class="message">
                ${client.message}
            </div>
        </div>
    `;
}

// chargement du JSON
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        clientsData = data.clients;
        renderClientReview(clientsData[currentIndex]);
    })
    .catch(err => {
        console.error("Erreur de chargement des données :", err);
    });

// gestion des boutons
leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + clientsData.length) % clientsData.length;
    renderClientReview(clientsData[currentIndex]);
});

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % clientsData.length;
    renderClientReview(clientsData[currentIndex]);
});
