const btnOn = document.querySelector("#btn-on");
const btnOff = document.querySelector("#btn-off");
const img = document.querySelector("#on-image");

btnOn.addEventListener("click", function () {
  img.style.display = "block";
});
btnOff.addEventListener("click", function () {
  img.style.display = "none";
});
