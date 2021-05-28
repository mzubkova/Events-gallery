const staticImg = document.querySelector(".gallery__icons");
const imgContainer = document.querySelector(".gallery__container");
const img = document.querySelector(".gallery__container-img");
const inner = document.querySelector(".inner");
const body = document.querySelector("body");
const autoplayBtn = document.querySelector(".btn--show");
const stopBtn = document.querySelector(".btn--stop");
const pauseBtn = document.querySelector(".btn--pause");
const sliderAutoplay = document.querySelector(".slider-autoplay");
// sliderAutoplay.classList.add("display-none");

const showImage = (e) => {
  e = e || window.e;
  let img = e.target || e.srcElement;
  if (img.tagName == "IMG") {
    document.getElementById("img-big").src = img.getAttribute("src");
  }
};

// const clicks = () => {
//   img.classList.add("gallery__container-img--scale");
//   staticImg.classList.add("display-none");
//   body.classList.add("hide");
// };

function getSrcImages() {
  let images = document.getElementsByClassName("gallery__icons-item");
  let srcArray = [];

  for (let i = 0; i < images.length; i++) {
    srcArray.push(images[i].src);
  }
  console.log(srcArray);
  return srcArray;
}

let image = getSrcImages();
let i = image.length;
let playing = true;
let slideInterval;

function nextImage() {
  imgContainer.classList.add("display-none");
  sliderAutoplay.classList.remove("display-none");
  staticImg.classList.add("display-none");
  inner.classList.add("inner-autoplay");
  autoplayBtn.classList.add("display-none");
  stopBtn.style.display = "block";
  pauseBtn.style.display = "block";
  if (i < image.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  sliderAutoplay.innerHTML = `<img src="${image[i - 1]}">`;
}

const showSlides = () => {
  playing = true;
  slideInterval = setInterval(nextImage, 2000);
};

const pauseSlides = () => {
  playing = false;
  clearInterval(slideInterval);
};

const pause = () => {
  if (playing) {
    pauseBtn.classList.add("btn--play");
    pauseSlides();
  } else {
    pauseBtn.classList.remove("btn--play");
    showSlides();
  }
};

const stopSlides = () => {
  playing = false;
  clearInterval(slideInterval);
  nextImage = false;
  imgContainer.classList.remove("display-none");
  sliderAutoplay.classList.add("display-none");
  staticImg.classList.remove("display-none");
  inner.classList.remove("inner-autoplay");
  autoplayBtn.classList.remove("display-none");
  stopBtn.style.display = "none";
  pauseBtn.style.display = "none";
};

staticImg.addEventListener("click", showImage);
autoplayBtn.addEventListener("click", showSlides);
// img.addEventListener("mouseover", clicks);
// img.addEventListener("mouseout", () => {
//   body.classList.remove("hide");
//   staticImg.classList.remove("display-none");
// });
stopBtn.addEventListener("click", stopSlides);
pauseBtn.addEventListener("click", pause);

module.exports = {
  getSrcImages,
};
