"use strict"

const shareButton = document.querySelector(".share-container");
shareButton.classList.toggle("share-container-toggle");
const shareIcon = document.querySelector(".share-icon-toggle");
shareIcon.classList.toggle("share-icon-toggle");
const popUp = document.querySelector(".hidden");

shareButton.addEventListener("click", () =>{
    shareButton.classList.toggle("share-container-toggle");
    shareIcon.classList.toggle("share-icon-toggle");
    popUp.classList.toggle("hidden");
});