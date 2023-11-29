const myImage = document.getElementById('img1');

myImage.addEventListener("click", (event) => {
    event.target.style.background = "red";
    event.target.style.color ="white";

});