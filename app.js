// ============================================================
// TO DO LIST
// ============================================================

let toDoItemValue = document.getElementById("toDoItem").value;
if (toDoItemValue == "") {
  document.getElementById("option").innerText = "Options are currently empty";
  document.getElementById("option").classList.add("button1");
}

function addItem() {
  document.getElementById("toDoItem").focus();
  let toDoItemValue = document.getElementById("toDoItem").value;
  if (toDoItemValue == "") {
    document.getElementById("message").innerHTML =
      "Error: Please enter an item<br>";
    document.getElementById("message").style = "display:block";
  } else {
    document.getElementById("message").style = "display:none;";
    document.getElementById("option").classList.remove("button1");
    document.getElementById("option").classList.add("button");
    document.getElementById("option").innerText = "Pick an option for me";
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
  item.parentElement.parentElement.removeChild(item.parentElement);
}

function completeItem(item) {
  let completedItem = item.parentElement.innerHTML;
  let finished = "<strike>" + completedItem + "</strike>";

  item.parentElement.innerHTML = finished;
}

// ============================================================
// HIGHLIGHT AN OPTION AT RANDOM
// ============================================================

function clearPreviousHighlights() {
  let listOfItemsTwo = Array.from(
    document.getElementById("toDoList").getElementsByTagName("li")
  );
  for (let b = 0; b < listOfItemsTwo.length, b++; ) {
    listOfItemsTwo[b].style.backgroundColor = "rgb(250, 161, 161)";
    console.log(listOfItemsTwo[b]);
  }
}

let counter = 0;

function random() {
  // gets the list of items the user entered from the to-do list. Stores in 'listOfItems'
  let listOfItems = Array.from(
    document.getElementById("toDoList").getElementsByTagName("li")
  );

  // console.log('list of items = ' + listOfItems);

  let numberOfItems = listOfItems.length;
  let numberOfTimesToHighlightEachItemMultiplier = 5;
  let totalHighlights =
    numberOfItems * numberOfTimesToHighlightEachItemMultiplier;
  // console.log(totalHighlights);

  // picks a random item index from the to-do list. Stores in 'rand'
  let rand = Math.floor(Math.random() * listOfItems.length);
  // console.log("li = " + rand);

  // console.log(listOfItems);

  // generates a random number from 25 to 50 ish? Number is used as the number of times to highlight
  let randomNumber = Math.floor(Math.random() * 26) + 25;

  let arr = [];
  // console.log(listOfItems.length * numberOfTimesToHighlightEachItemMultiplier);
  function generateArrayOfRandomNumbers() {
    for (
      let i = 0;
      i < listOfItems.length * numberOfTimesToHighlightEachItemMultiplier;
      i++
    ) {
      //  if(arr.length < listOfItems.length * 5){
      arr[i] = Math.floor(Math.random() * listOfItems.length);
      // console.log(arr);
    }
    //  } else {
    //     i=0;
    //  }
  }

  generateArrayOfRandomNumbers();

  for (let a = 0; a < arr.length; a++) {
    // setTimeout(function () {
    // listOfItems[arr[a]].style.backgroundColor = "rgb(255, 0, 157)";
    // }, 250);
    // setTimeout(function () {
    //   listOfItems[arr[a]].style.backgroundColor = "rgb(250, 161, 161)";
    //   }, 500);

    setTimeout(function timer() {
      listOfItems[arr[a]].style.backgroundColor = "rgb(255, 0, 157)";
    }, a * 150);

    setTimeout(function timerTwo() {
      listOfItems[arr[a]].style.backgroundColor = "rgb(250, 161, 161)";
    }, a * 250);
  }

  setTimeout(function () {
    listOfItems[rand].style.backgroundColor = "rgb(0, 255, 55)";
  }, totalHighlights * 250);

  // if (randomNumber - counter == 1) {
  //   let rand2 = Math.floor(Math.random() * listOfItems.length);
  //   console.log("randomNumber - counter = " + (randomNumber - counter));
  //   listOfItems[rand2].classList.add("random-final");
  //   console.log("rand = " + rand);
  //   console.log("listOfItems[rand] = " + listOfItems[rand]);
  // }

  // console.log("randomNumber = " + randomNumber);
  // if (++counter < randomNumber) {
  //   console.log("counter = " + counter);
  //   console.log("randomNumber = " + randomNumber);
  // runTheRandomFunctionARandomAmountOfTimes();
  // }

  // for (let i = 0; i < randomNumber; i++){

  //   console.log(listOfItems.length);
  // console.log(i);

  //   listOfItems[i].classList.add("random-final");
  // changes the background-colour of the random item to bright pink after 250ms
  // setTimeout(function () {
  // listOfItems[i].style.backgroundColor = "rgb(255, 0, 157)";
  // }, 250);

  // changes the background-colour of the random item to pale pink after 500ms
  // setTimeout(function () {
  //   listOfItems[i].style.backgroundColor = "rgb(250, 161, 161)";
  // }, 500);

  // if (counter < 5){

  //   setTimeout(function timer() {
  //     listOfItems[i].style.backgroundColor = "rgb(255, 0, 157)";
  //   }, i * 250);

  //   setTimeout(function timerTwo() {
  //     listOfItems[i].style.backgroundColor = "rgb(250, 161, 161)";
  //   }, i * 300);

  //   if (i > listOfItems.length){
  //     i = 0;
  //     counter++;
  //   }
  // }

  // }
}

// function runTheRandomFunctionARandomAmountOfTimes() {
//   window.setTimeout(random, 100);
// }

function run() {
  clearPreviousHighlights();
  random();
}
