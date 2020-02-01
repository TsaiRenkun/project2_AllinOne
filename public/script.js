console.log('chicken');
console.log("we are in the browser");

var calender = document.querySelector(".calender");
let submit = document.getElementById('submit_btn')


function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event
    .dataTransfer
    .clearData();
}

function myFunction() {
    var myDate = new Date();
for (var i = 0; i < 7; i++) {
        var y = document.createElement("DIV");
        y.setAttribute("ondragover","onDragOver(event);");
        y.setAttribute("ondrop","onDrop(event);");
        y.classList.add("box");
        calender.appendChild(y);

        var n = document.input
      var x = document.createElement("DIV");
      x.setAttribute("type", "date");
      x.setAttribute("value", new Date(myDate.setDate(myDate.getDate() + 1)).toString());
      x.classList.add("dates");
      x.readOnly = true;
      x.innerText = myDate.toDateString()
      console.log(myDate)
    //add a day to the date
      y.appendChild(x);
    }
}

function putdrag(){
    var y = document.getElementsByClassName('parts')
    console.log("ASDHGSAJDGASJDGSAJDGSJHDGASHJDGSADJHSAGDHJAS" , y)
    for (var i = 0; i < y.length; i++) {
        y[i].setAttribute("ondragstart","onDragStart(event);");
    }
}




myFunction();
putdrag();
var calArray = document.querySelectorAll('.box');

console.log(calArray)

submit.addEventListener('click', () => {
    let data = [];
calArray.forEach((x,i)=>{
    if(x.childNodes.length > 1){
        let day = x.childNodes[0].innerText
        let part = x.childNodes[1].innerText
        let partid = x.childNodes[1].id
        console.log(partid)
        console.log(part)
        console.log("asdas" ,x)
        console.log(i)
            data.push({
                day: day,
                part:part,
                bodypart_id:partid
                })
            }
       })
console.log("DADADADADTATATATATATATAT ", data);


  var request = new XMLHttpRequest();
  request.addEventListener("load", function() {
    console.log("DONE");
    console.log(this.responseText);
  });

  console.log(data);
  let url = "/workout";
  request.open("POST", url);
  request.setRequestHeader(
    "Content-Type",
    "application/json;charset=UTF-8"
  );
  request.send(JSON.stringify(data));
})