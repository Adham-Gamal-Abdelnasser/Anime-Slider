//! html variables
let boxContainer = document.getElementById("boxContainer");
let imagesContainer = Array.from(document.querySelectorAll(".item img"));
let boxItem = document.getElementById("boxItem");
let closeIcon = document.getElementById("off");
let nextIcon = document.getElementById("next")
let previousIcon = document.getElementById("prev")
//! logic variables
let imageIndex = 0;
//todo to view the targeted image in layer 
for (let i = 0; i < imagesContainer.length; i++) {
  imagesContainer[i].addEventListener("click", function (e) {
    boxContainer.classList.replace("d-none", "d-flex");
    boxItem.style.cssText = `
            background-image: url("${e.target.src}");
        `;
    imageIndex = imagesContainer.indexOf(e.target);
  });
}
function hideImage() {
  boxContainer.classList.replace("d-flex", "d-none");
}
//todo setting the inner box of the appearing layer dynamically depending on changable index
function setBgImageByImageIndex(imageIndex) {
  boxItem.style.cssText = `
        background-image: url("${imagesContainer[imageIndex].src}");
    `;
}
function nextImage() {
    imageIndex++
    if (imageIndex==imagesContainer.length) {
        imageIndex=0
    }
    setBgImageByImageIndex(imageIndex)
}
function previousImage() {
    imageIndex--
    if (imageIndex<0) {
        imageIndex= imagesContainer.length-1
    }
    setBgImageByImageIndex(imageIndex)
}

closeIcon.addEventListener("click", hideImage);
nextIcon.addEventListener("click" , nextImage)
previousIcon.addEventListener("click",previousImage)
document.addEventListener("keyup",function (e) {
    if (e.key=="ArrowRight") {
        nextImage()
    }else if (e.key=="ArrowLeft") {
        previousImage()
    } else if (e.key=="Escape") {
        hideImage()
    }
})
boxContainer.addEventListener("click",function () {
    hideImage()
    boxItem.addEventListener("click",function (e) {
        e.stopPropagation() //! to prevent hiding image when clicking on inner box of the appearing layer
    })
})