function carregar() {
    let numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
    let numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    let titulo = document.querySelector("#titulo");

    img1.setAttribute("src", `images/dice${numeroAleatorio1}.png`);
    img2.setAttribute("src", `images/dice${numeroAleatorio2}.png`);

    if (numeroAleatorio1 === numeroAleatorio2) {
        titulo.textContent = "Empate";
    } else if (numeroAleatorio1 > numeroAleatorio2) {
        titulo.textContent = "🚩 Player 1 venceu";
    } else {
        titulo.textContent = "Player 2 venceu 🚩";
    }
}

// function carregar() {

//     let numeroAleatorio1 = Math.random() * 6;
//     numeroAleatorio1 = Math.floor(numeroAleatorio1) + 1;

//     let numeroAleatorio2 = Math.random() * 6;
//     numeroAleatorio2 = Math.floor(numeroAleatorio2) + 1;


//     if (numeroAleatorio1 === 1) {
//         document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//     } else if (numeroAleatorio1 === 2) {
//         document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//     } else if (numeroAleatorio1 === 3) {
//         document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//     } else if (numeroAleatorio1 === 4) {
//         document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//     } else if (numeroAleatorio1 === 5) {
//         document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     } else {
//         document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//     }

//     if (numeroAleatorio2 === 1) {
//         document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//     } else if (numeroAleatorio2 === 2) {
//         document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//     } else if (numeroAleatorio2 === 3) {
//         document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//     } else if (numeroAleatorio2 === 4) {
//         document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//     } else if (numeroAleatorio2 === 5) {
//         document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//     } else {
//         document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//     }

//     if (numeroAleatorio1 === numeroAleatorio2) {
//         document.querySelector("#titulo").innerHTML = "Empate";
//     } else if (numeroAleatorio1 > numeroAleatorio2) {
//         document.querySelector("#titulo").innerHTML = "🚩 Player 1 venceu";
//     } else {
//         document.querySelector("#titulo").innerHTML = "Player 2 venceu 🚩";
//     }

// }

