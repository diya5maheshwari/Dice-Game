var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomeImageSource = randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomeImageSource2 = randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomeImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player1 is Win !";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player2 is Win !!";
}
else {
    document.querySelector("h1").innerHTML = "Drow";
}
