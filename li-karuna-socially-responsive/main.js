// Define the dataset of photos
const photos = [
  "images/in-bed-1.png",
  "images/in-bed-2.png",
  "images/in-bed-3.png",
  "images/in-bed-4.png",
  "images/in-bed-5.png",
  "images/in-bed-6.png",
  "images/in-bed-7.png",
  "images/in-bed-8.png",
  "images/in-bed-9.png",
  "images/in-bed-10.png",
];

// Initialize the current image index to 0
let i = 0;

const currentPhoto = document.querySelector(".current-photo");
const nextPhoto = document.querySelector(".next-photo");
const previousPhoto = document.querySelector(".previous-photo")

// Display the current image in the carousel
function showImage() {
  console.log("Show image");
  currentPhoto.innerHTML = `<img src="${photos[i]}">`;
}

// Move the carousel forward one image
function forward(ev) {
  console.log("forward");
  i++;
  // currentPhoto.classList.add("slide-up");
  // nextPhoto.classList.add("slide-up", "next-slide");
  if (i === photos.length - 1) {
    i = 0;
  }
  showImage();
  // currentPhoto.classList.remove("slide-up", "next-slide");
  // currentPhoto.addEventListener("animationend", () => {
  //   currentPhoto.classList.remove("slide-up", "next-slide");
  // }, {once: true});
  // currentPhoto.addEventListener("animationend", () => {
  //   nextPhoto.classList.remove("slide-up", "next-slide");
  // }, {once: true});
}

// Move the carousel backward one image
function back(ev) {
  console.log("back");
  i--;
  // currentPhoto.classList.add("slide-down");
  // nextPhoto.classList.add("next-slide");
  if (i < 0) {
    i = photos.length - 1;
  }
  showImage();
  // currentPhoto.classList.remove("slide-down");
  // currentPhoto.addEventListener("animationend", () => {
  //   currentPhoto.classList.remove("slide-down");
  // }, {once: true});
}

// Attach event listeners to the window object
document.addEventListener("keydown", function(ev) {
  if (ev.code === "ArrowUp") {
    forward(ev);
  } else if (ev.code === "ArrowDown") {
    back(ev);
  }
});

// Display the first image in the carousel
showImage();
