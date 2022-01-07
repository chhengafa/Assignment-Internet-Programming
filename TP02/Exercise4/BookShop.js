
var selectedRow = null;
let x = -1;
var names = [];
var price = [];
var category = [];
let header = document.getElementsByClassName("c1")[0];

function onFormSubmit(e) {
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
        console.log("hello")
    } else {
        updateRecord(formData);
    }
    resetForm();
}


//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["price"] = document.getElementById("price").value;
    formData["category"] = document.getElementById("category").value;

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    names[x + 1] = data.name;
    price[x + 1] = data.price;
    category[x + 1] = data.category;

    document.getElementsByClassName("box").innerHTML +=
        `<div>hello</div>`;
    x++;
}

//Edit the data
function editBook(id) {
    header.innerHTML = "Edit book information";

    selectedRow = id;
    document.getElementById('name').value = names[id];
    document.getElementById('price').value = price[id];
    document.getElementById('category').value = category[id];
}

function updateRecord(formData) {
    document.getElementsByClassName("name")[selectedRow].innerHTML = "Name : " + formData.name;
    document.getElementsByClassName("price")[selectedRow].innerHTML = "Price : " + formData.price + " riels";
    document.getElementsByClassName("category")[selectedRow].innerHTML = "Category : " + formData.category;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'hidden';
    document.getElementsByClassName("add_book")[0].style.visibility = 'visible';

    document.getElementsByClassName("c1")[0].innerHTML = "Add new book here!";
    selectedRow = null;
}

//delete
function deleteBook(id) {
    console.log(id);
    if (confirm('Do you want to delete this record?')) {
        document.getElementsByClassName('items')[id].hidden = true;
    }
    resetForm();
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('category').value = '';
}