let pageHeader = document.querySelector ("#page-header");
pageHeader.style.backgroundColor = "black";
pageHeader.style.color = "white";

let dogNames = document.querySelectorAll(".dog-name");
for (let i = 0; i < dogNames.length; i++){
    dogNames[i].style.color = "red";
}
let dogImages = document.querySelectorAll('.dog-image');
for (let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = "15px"
}