const inputItem = document.querySelector('input[type = "text"]');
const form = document.querySelector("form");
const itemList = document.querySelector("#items");
const clearBtn = document.querySelector("#clear");
const count = document.querySelector("#comp");
const elText = document.querySelector(".list__text");

form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  elText.style.display = 'none';
  let newItem = inputItem.value;

  let li = document.createElement("li");
  li.className = "list__item text-capitalize";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "list__del";
  deleteBtn.id = "del";

  deleteBtn.innerHTML = "<i class='bx bx-trash'></i>"; 

  li.appendChild(document.createTextNode(newItem));
  console.log(li);
  itemList.appendChild(li);
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function(){
    li.remove('.list__item');
  });


  inputItem.value = "";

  clearBtn.addEventListener("click", function (){
    itemList.removeChild(li);
  });
}


