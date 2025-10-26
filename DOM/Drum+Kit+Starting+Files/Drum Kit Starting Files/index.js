let numeroDeBotoes = document.querySelectorAll(".drum").length;

for (let i = 0; i < numeroDeBotoes; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
     alert("eu cliquei");

    });

}



// function cliquei() {
//     alert("eu cliquei");
// }