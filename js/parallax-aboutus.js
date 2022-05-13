const layer1 = document.getElementById("layer1");

scroll = window.pageYOffset;
document.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  layer1.style.width = 100 + scroll / 5 + "%";
  layer1.style.opacity = 100 - scroll / 4 + "%";
});

const layer2 = document.getElementById("layer2");

scroll = window.pageYOffset;
document.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  layer2.style.width = 100 + scroll / 10 + "%";
  layer2.style.left = scroll / 500 + "%";
  layer2.style.opacity = 100 - scroll / 5 + "%";
});

const text = document.getElementById("text");

scroll = window.pageYOffset;
document.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  text.style.top = -scroll / 20 + "%";
  text.style.opacity = scroll / 2 + "%";
});




