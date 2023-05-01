// Define the dataset of photos
const photos = [
  "images/in-bed-1.png",
  "images/in-bed-2.png"
];

// Initialize the current image index to 0
let i = 0;

// Display the current image in the carousel
function showImage() {
  console.log("Show image");
  const currentPhoto = document.querySelector(".current-photo");
  currentPhoto.innerHTML = `<img src="${photos[i]}">`;
}

// Move the carousel forward one image
function forward(ev) {
  console.log("forward");
  const currentPhoto = document.querySelector(".current-photo");
  if (ev.code === "ArrowUp") {
    i = (i + 1) % photos.length;
    currentPhoto.classList.add("slide-up");
    i++;
    currentPhoto.classList.add("next-slide");
    showImage();
  }
}

// Move the carousel backward one image
function back(ev) {
  console.log("back");
  const currentPhoto = document.querySelector(".current-photo");
  if (ev.code === "ArrowDown") {
    i = (i - 1 + photos.length) % photos.length;
    // currentPhoto.classList.add("slide-down");
    showImage();
  }
}

// Attach event listeners to the window object
window.addEventListener("keydown", forward);
window.addEventListener("keydown", back);

// Display the first image in the carousel
showImage();
