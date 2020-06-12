var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodyy");
var button = document.getElementById("button");
// console.log(css)
// console.log(color1)
// console.log(color2)
// console.log(bodyy)
// color1.addEventListener("input", changeColor);
// color2.addEventListener("input",changeColor);
button.addEventListener("click", random);
function changeColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  //   css.textContent = body.style.background;
    css.textContent = ` Hex color: ${color1.value} and  ${color2.value}`;
}
function randomString() {
  var randomColor;
  randomColor = Math.floor(Math.random() * 999999);
  return randomColor;
}
function random() {
  color1.value = "#" + randomString();
  color2.value = "#" + randomString();
  changeColor();
}
changeColor();
