console.log("WOKRING WORKING WORKINDAIFIANDIASNFIASNFISAFNSIAFNASIFNSIAFNASIFASIFNSI")

const likeButton = document.querySelector(".like_btn");

const likeHandler = function() {
  const command = JSON.parse(this.responseText).command;
  if (command === "INSERT") {
    likeButton.style.color = "#2979ff";
  } else {
    likeButton.style.color = "black";
  }
};

likeButton.addEventListener("click", () => {
  const likeRequest = new XMLHttpRequest();

  likeRequest.addEventListener("load", likeHandler);
  const URL = "/like"

  likeRequest.open("GET", URL);
  likeRequest.send();
});