// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.



//add todo elements
let todoArray = [];

function addTodo(){
  let list = document.getElementById("myUL");
  for (let i = 0; i < todoArray.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(todoArray[i]);
    li.appendChild(text);
    list.appendChild(li);
    todoArray.push(text)
  }
}




// add close button to the elements
function closeButton(){
  let listItems = document.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    listItems[i].appendChild(span);
  }

  let closeItems = document.getElementsByClassName("close");
  for (let i = 0; i < closeItems.length; i++) {
    closeItems[i].onclick = function () {
      this.parentElement.remove();
    };
  }
}

//check button
let uList = document.querySelector('ul');
uList.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  }
}, false)


//add new todo
function newElement(){
  let li = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let textNode = document.createTextNode(inputValue);
  li.appendChild(textNode)

  let closeModal = document.getElementById("close-modal"),
  modal = document.getElementById("modal");

  

  if (inputValue === "") {
    modal.style.display = "block";
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  closeModal.addEventListener("click", (e) => {
    modal.style.display = "none";
  });
  document.getElementById("input").value = "";

  addTodo();
  closeButton();
}

addTodo();
closeButton();