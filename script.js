var firstColor = document.querySelector(".color1");
var secondColor = document.querySelector(".color2");
var colorInformation = document.querySelector("h3");
var body = document.getElementById("body_gradient");

function gradientColorGenerator(){
    body.style.background= `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
    colorInformation.innerHTML = body.style.background;
}

firstColor.addEventListener("input", gradientColorGenerator);
secondColor.addEventListener("input", gradientColorGenerator);



