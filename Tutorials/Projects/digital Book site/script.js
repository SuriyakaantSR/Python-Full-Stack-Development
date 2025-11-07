// script.js

// Selecting the popup elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopuptoogle = document.getElementById("add-popup-button");

// Event Listener to open the popup when the '+' button is clicked
addpopuptoogle.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting the Cancel Button
var cancelpopup = document.getElementById("cancel-popup");

// Event Listener to close the popup when the CANCEL button is clicked
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault(); // Cancel button should not submit the form
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// SELECT container, add-book button, and all input fields
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Event Listener to add a new book when the ADD button is clicked
addbook.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    // Create a new div element for the book container
    var div = document.createElement("div");
    // Assign the class 'book-container' for styling
    div.setAttribute("class", "book-container");

    // Populate the inner HTML of the new book container using template literals (backticks)
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;

    // Append the new book container to the main container
    container.append(div);

    // Close the popup after adding the book
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear the input fields for the next entry
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

// Function to handle deleting a book
function deletebook(event) {
    // event.target is the delete button
    // parentElement is the 'book-container' div
    event.target.parentElement.remove();
}