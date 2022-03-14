const inputItem = document.querySelector('#text');
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

  li.innerHTML = `<p>${newItem}</p>`;
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

const elSearch = document.querySelector("#search");

elSearch.addEventListener("keyup", filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  console.log(items);

  for(let i = 0; i < Array.from(items).length; i++){
    let itemName = items[i].textContent;
    console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
      items[i].className = "list__item text-capitalize"
    } else {
      items[i].className = "list__item text-capitalize d-none";
    }
  }
}
