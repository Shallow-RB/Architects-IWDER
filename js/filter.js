
const Music = document.querySelectorAll(['section[data-category="Music"]']);
const Clothing = document.querySelectorAll(['section[data-category="Clothing"]']);
const Headwear = document.querySelectorAll(['section[data-category="Headwear"]']);
const Poster = document.querySelectorAll(['section[data-category="Poster"]']);

const checkMusic = document.getElementById("Music");
const checkClothing = document.getElementById("Clothing");
const checkHeadwear = document.getElementById("Headwear");
const checkPoster = document.getElementById("Poster");

checkClothing.checked = true;
checkHeadwear.checked = true;
checkMusic.checked = true;
checkPoster.checked = true;

checkMusic.onclick = function () {
  checkMusic.checked === true
	? Music.forEach((elem) => {elem.style.display = "";})
	: Music.forEach((elem) => {elem.style.display = "none";});
  };


checkClothing.onclick = function () {
	checkClothing.checked === true
	? Clothing.forEach((elem) => {elem.style.display = "";})
	: Clothing.forEach((elem) => {elem.style.display = "none";});
	};

checkHeadwear.onclick = function () {
	checkHeadwear.checked === true
	? Headwear.forEach((elem) => {elem.style.display = "";})
	: Headwear.forEach((elem) => {elem.style.display = "none";});
	};

checkPoster.onclick = function () {
	checkPoster.checked === true
	? Poster.forEach((elem) => {elem.style.display = "";})
	: Poster.forEach((elem) => {elem.style.display = "none";});
	};
