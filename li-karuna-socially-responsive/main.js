//go into the internet and draw out a dataset of random
//videos, memes, and images

//these is placeholder images, will be changed with
//dataset
const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;

//show the images from the dataset in the divs
function showImage() {
    console.log('Show image');
    const currentPhoto = document.querySelector(".current-image");
    currentPhoto.innerHTML = `<img src="${photos[idx]}">`;
    // const caption = document.querySelector(".caption");
    // caption.innerHTML = `Image ${idx + 1} of ${photos.length}`;
}

//when i press the up arrow, or use the scroll button,
//the carousel moves forward one image
function forward() {
    console.log('forward');
    if (ev.code === 'ArrowUp') {
    idx++;
    }
    showImage();
}

//when i press the down arrow, or use the scroll button,
//the carousel moves backward one image
function back() {
    console.log('back');
    if (ev.code === 'ArrowDown') {
        idx--;
    }
    showImage();
}