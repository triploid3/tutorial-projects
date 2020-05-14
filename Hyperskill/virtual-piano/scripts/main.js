document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        let tone1 = new Audio("assets/A.mp3");
        tone1.play()
    } else if (event.key === "s") {
        let tone2 = new Audio("assets/S.mp3");
        tone2.play();
    } else if (event.key === "d") {
        let tone3 = new Audio("assets/D.mp3");
        tone3.play();
    } else if (event.key === "f") {
        let tone4 = new Audio("assets/F.mp3");
        tone4.play();
    } else if (event.key === "g") {
        let tone5 = new Audio("assets/G.mp3");
        tone5.play();
    } else if (event.key === "h") {
        let tone6 = new Audio("assets/H.mp3");
        tone6.play();
    } else if (event.key === "j") {
        let tone7 = new Audio("assets/J.mp3");
        tone7.play();
    } else if (event.key === "w") {
        let tone8 = new Audio("assets/W.mp3");
        tone8.play();
    } else if (event.key === "e") {
        let tone9 = new Audio("assets/E.mp3");
        tone9.play();
    } else if (event.key === "t") {
        let tone10 = new Audio("assets/T.mp3");
        tone10.play();
    } else if (event.key === "y") {
        let tone11 = new Audio("assets/Y.mp3");
        tone11.play();
    } else if (event.key === "u") {
        let tone12 = new Audio("assets/U.mp3");
        tone12.play();
    } else if (event.key) {
        console.log("Unbound key.")
    }
});