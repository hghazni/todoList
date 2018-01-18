//    Global Variables
var list = document.getElementById("todoList");

function todoList() {
    //    Create List + List Item
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    list.appendChild(newItem);
}

//    Reset List
function resetList() {
    list.innerHTML = "";
}