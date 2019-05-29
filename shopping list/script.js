var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(createDeleteButton());
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossOff(event) {
console.log(event);

	if (event.target.classList.contains('deleteButton')) {
		//console.log("delete li");
		event.target.parentNode.remove();//delete li -parent of the button is li
	}
	else if (event.target.tagName === "LI")
		{ //if (event.target.contains(getElementById('text'))){
		//console.log(event);
		//console.log(event.target);
		event.target.classList.toggle("done");
	}
}

function createDeleteButton() {
	var deleteButton = document.createElement("button");
	deleteButton.className = "deleteButton";
	deleteButton.appendChild(document.createTextNode("Delete"));
	return deleteButton;
}

// function deleteListItem(event){
// console.log(event);

// }


for (i = 0; i < list.length; i++) {
	list[i].appendChild(createDeleteButton());
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossOff);

//ul.addEventListener("click", deleteListItem);



// 1. If you click on the list item, it toggles the .done  
// class on and off.

// 2. Add buttons next to each list item to delete the 
// item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically 
// adds the delete button next to it (hint: be sure to check 
// 	if new items are clickable too!)