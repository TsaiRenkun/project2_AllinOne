
const likeICON = document.querySelector(".like_btn");likeICON

const likeCheckHandler = function() {likeCheckHandler
  if (this.responseText === "") {
    likeICON.style.color = "black";
  } else {
    likeICON.style.color = "#2979ff";
  }
};

likeICON.addEventListener("click", () => {
  const likeICONRequest = new XMLHttpRequest();

  likeICONRequest.addEventListener("load", likeCheckHandler);likeICONRequest
  const URL = "/check"

  likeICONRequest.open("GET", URL);
  likeICONRequest.send();
});