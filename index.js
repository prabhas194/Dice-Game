var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice" + randomnumber1+ ".png";
var randomsourceimage="images/" + randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsourceimage);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice" + randomnumber2 + ".png";
var randomsourceimage2="images/" + randomdiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsourceimage2);


if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


