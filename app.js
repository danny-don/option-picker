function addItem() {
  document.getElementById("toDoItem").focus();
  let toDoItemValue = document.getElementById("toDoItem").value;

  if (toDoItemValue == "") {
    document.getElementById("message").innerHTML =
      "Error: Please enter an item<br>";
    document.getElementById("message").style = "display:block";
  } else {
    document.getElementById("message").style = "display:none;";
    let presentListItems = document.getElementById("toDoList").innerHTML;
    let newListItems =
      presentListItems +
      '<li class="list-group-item display-5">' +
      toDoItemValue +
      ' <button onclick="deleteItem(this)" class="text-danger delete" title="Delete this item"> <span class="fa fa-trash"></span></button> <button onclick="completeItem(this)" class="text-success complete" title="Complete this item"><span class="fa fa-check"></span></button></li>';
    document.getElementById("toDoList").innerHTML = newListItems;
    document.getElementById("toDoItem").value = "";
  }
}

function addItemWithEnter(event) {
  const toDoItemValue = document.getElementById("toDoItem").value;
  if (event.keyCode === 13 && toDoItemValue !== "") {
    event.preventDefault();
    addItem();
  }
}

function deleteItem(item) {
  item.parentElement.remove();
}

function completeItem(item) {
  let completedItem = item.parentElement.innerHTML;
  let finished = "<strike>" + completedItem + "</strike>";

  item.parentElement.innerHTML = finished;
}

// ============================================================

// function random() {
//   var listOfItems = document
//     .getElementById("toDoList")
//     .getElementsByTagName("li");

//   var rand = Math.floor(Math.random() * listOfItems.length);
//   console.log("li = " + rand);

//   setTimeout(function () {
//     listOfItems[rand].style.backgroundColor = "yellow";
//   }, 500);
//   setTimeout(function () {
//     listOfItems[rand].style.backgroundColor = "white";
//   }, 1000);
// }

// ============================================================

// function random() {
//   var listOfItems = document
//     .getElementById("toDoList")
//     .getElementsByTagName("li");
//   console.log(listOfItems);
//   let randomNumber = Math.floor(Math.random() * 20) + 1;
//   let a = 0;
//   for (a = 0; a < randomNumber; a++) {
//     var rand = Math.floor(Math.random() * listOfItems.length);

//     setTimeout(function () {
//       listOfItems[rand].style.backgroundColor = "yellow";
//     }, 500);
//     setTimeout(function () {
//       listOfItems[rand].style.backgroundColor = "white";
//     }, 1000);
//   }
// }

// function runTheRandomFunctionARandomAmountOfTimes() {
//   let randomNumber = Math.floor(Math.random() * 20) + 1;

//   let i = 0;
//   for (i = 0; i < randomNumber; i++) {
//     random();
//   }
// }

// ============================================================

// function random() {
//   var listOfItems = document
//     .getElementById("toDoList")
//     .getElementsByTagName("li");

//   var rand = Math.floor(Math.random() * listOfItems.length);
//   console.log("li = " + rand);
//   for (let a = 0; a < listOfItems.length * 5; a++) {
//     if (a > listOfItems.length) {
//       a = 0;
//     }
//     setTimeout(function () {
//       listOfItems[a].style.backgroundColor = "yellow";
//     }, 500);
//     setTimeout(function () {
//       listOfItems[a].style.backgroundColor = "white";
//     }, 1000);
//   }
// }

// function runTheRandomFunctionARandomAmountOfTimes() {
//   let randomNumber = Math.floor(Math.random() * 20) + 1;
//   console.log("random number of runs = " + randomNumber);
//   let i = 0;
//   for (i = 0; i < randomNumber; i++) {
//     console.log("i = " + i);
//     setTimeout(function () {
//       random();
//       console.log("random function ran");
//     }, 1000);
//   }
// }

// ============================================================

// function random() {
//   const listOfItems = document
//     .getElementById("toDoList")
//     .getElementsByTagName("li");

//   console.log(listOfItems);

//   let array = [...listOfItems];

//   console.log(array);

//   var rand = Math.floor(Math.random() * listOfItems.length);
//   console.log("li = " + rand);

//   let time = 250;

//   for (let i = 0; i < listOfItems.length; i++) {
//     setTimeout(function () {
//       array[i].style.backgroundColor = "yellow";
//     }, time);
//     time = time + 100;
//   }

// -- -- -- -- -- -- -- -- -- -- -- --

// setTimeout(function () {
//   listOfItems[rand].style.backgroundColor = "yellow";
// }, 500);
// setTimeout(function () {
//   listOfItems[rand].style.backgroundColor = "white";
// }, 1000);
// }

// ============================================================

// function random() {
//   var listOfItems = document
//     .getElementById("toDoList")
//     .getElementsByTagName("li");

//   let randomNumber = Math.floor(Math.random() * 20) + 1;
//   for (let i = 0; i < randomNumber; i++) {
//     console.log("randomNumber = " + randomNumber);
//     var rand = Math.floor(Math.random() * listOfItems.length);
//     console.log("li = " + rand);
//     setTimeout(function () {
//       listOfItems[rand].style.backgroundColor = "yellow";
//     }, 500);
//     setTimeout(function () {
//       listOfItems[rand].style.backgroundColor = "white";
//     }, 1000);
//     console.log("i = " + i);
//   }
// }

// ============================================================

// function random() {
//   var listOfItems = document
//     .getElementById("toDoList")
//     .getElementsByTagName("li");

//   let array = [...listOfItems];

//   let randomNumber = Math.floor(Math.random() * 20) + 1;
//   for (let i = 0; i < randomNumber; i++) {
//     if (i >= randomNumber) {
//       i == 0;
//     }
//     console.log("randomNumber = " + randomNumber);
//     var rand = Math.floor(Math.random() * array.length);
//     console.log("li = " + rand);
//     setTimeout(function () {
//       array[i].style.backgroundColor = "yellow";
//     }, 500);
//     setTimeout(function () {
//       array[i].style.backgroundColor = "white";
//     }, 1000);
//     console.log("i = " + i);
//   }
// }

// ============================================================

// function addItem() {
//   document.getElementById("toDoItem").focus();
//   let toDoItemValue = document.getElementById("toDoItem").value;

//   if (toDoItemValue == "") {
//     document.getElementById("message").innerHTML =
//       "Error: Please enter an item<br>";
//     document.getElementById("message").style = "display:block";
//   } else {
//     document.getElementById("message").style = "display:none;";
//     let presentListItems = document.getElementById("toDoList").innerHTML;
//     let newListItems =
//       presentListItems +
//       '<li class="list-group-item display-5">' +
//       toDoItemValue +
//       ' <button onclick="deleteItem(this)" class="text-danger delete" title="Delete this item"> <span class="fa fa-trash"></span></button><button onclick="completeItem(this)" class="text-success complete" title="Complete this item"><span class="fa fa-check"></span></button></li>';
//     document.getElementById("toDoList").innerHTML = newListItems;
//     document.getElementById("toDoItem").value = "";
//   }
// }

// function deleteItem(item) {
//   item.parentElement.remove();
// }

// function completeItem(item) {
//   let completedItem = item.parentElement.innerHTML;
//   let finished = "<strike>" + completedItem + "</strike>";

//   item.parentElement.innerHTML = finished;
// }

// ============================================================

let randomNumber = Math.floor(Math.random() * 26) + 25;
let counter = 0;
let listOfItems = document
  .getElementById("toDoList")
  .getElementsByTagName("li");

function random() {
  let rand = Math.floor(Math.random() * listOfItems.length);
  console.log("li = " + rand);

  setTimeout(function () {
    listOfItems[rand].style.backgroundColor = "rgb(255, 0, 157)";
  }, 250);
  setTimeout(function () {
    listOfItems[rand].style.backgroundColor = "rgb(250, 161, 161)";
  }, 500);

  if (randomNumber - counter == 1) {
    let rand2 = Math.floor(Math.random() * listOfItems.length);
    console.log("randomNumber - counter = " + (randomNumber - counter));
    listOfItems[rand2].style.backgroundColor = "rgb(255, 0, 157)";
    console.log("rand = " + rand);
    console.log("listOfItems[rand] = " + listOfItems[rand]);
  }

  console.log("randomNumber = " + randomNumber);
  if (++counter < randomNumber) {
    console.log("counter = " + counter);
    console.log("randomNumber = " + randomNumber);
    runTheRandomFunctionARandomAmountOfTimes();
  }
}

function runTheRandomFunctionARandomAmountOfTimes() {
  window.setTimeout(random, 100);
}
