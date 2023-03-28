const bgImageEl = document.getElementById("bg-image");

function updateImage() {
bgImageEl.style.opacity = 1- window.pageYoffset / 900;
bgImageEl.style.backgroundSize = 160 - window.pageYoffset / 12 + "%";



}

window.addEventListener("Scroll" ,() => {
  updateImage();
});
