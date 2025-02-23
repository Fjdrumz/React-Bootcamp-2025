const dom = `JavaScript DOM Manipulation Explained
What is the DOM?
The Document Object Model (DOM) is a structured representation of an HTML document that JavaScript can interact with. It turns the HTML document into a tree-like structure where each element is a node.

JavaScript can be used to manipulate the DOM, meaning it can add, remove, or modify elements and attributes dynamically without reloading the page.

Selecting Elements in the DOM
To manipulate an element, you first need to select it. JavaScript provides several methods to select elements:

document.getElementById() – Selects an element by its id.

javascript
Copy
Edit
const heading = document.getElementById("title");
document.getElementsByClassName() – Selects elements by their class name (returns a collection).

javascript
Copy
Edit
const items = document.getElementsByClassName("item");
document.getElementsByTagName() – Selects elements by their tag name (returns a collection).

javascript
Copy
Edit
const paragraphs = document.getElementsByTagName("p");
document.querySelector() – Selects the first matching element (supports CSS selectors).

javascript
Copy
Edit
const firstItem = document.querySelector(".item");
document.querySelectorAll() – Selects all matching elements (returns a NodeList).

javascript
Copy
Edit
const allItems = document.querySelectorAll(".item");
Manipulating Elements
Once an element is selected, you can modify its properties, attributes, and content.

1. Changing Text Content
javascript
Copy
Edit
const heading = document.getElementById("title");
heading.textContent = "New Title";  // Changes the text
heading.innerHTML = "<span>New Title</span>"; // Inserts HTML inside
2. Modifying Attributes
javascript
Copy
Edit
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
console.log(link.getAttribute("href"));  // Get attribute value
3. Changing CSS Styles
javascript
Copy
Edit
const box = document.querySelector(".box");
box.style.backgroundColor = "blue"; // Directly change styles
box.style.fontSize = "20px";
4. Adding and Removing Classes
javascript
Copy
Edit
const element = document.querySelector(".box");
element.classList.add("active");   // Add class
element.classList.remove("active"); // Remove class
element.classList.toggle("hidden"); // Toggle class
Creating and Removing Elements
1. Creating Elements
javascript
Copy
Edit
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);  // Add to the end of <body>
2. Removing Elements
javascript
Copy
Edit
const unwantedElement = document.getElementById("old");
unwantedElement.remove(); // Removes element
Event Listeners
You can make elements respond to user interactions using event listeners.

javascript
Copy
Edit
const button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("Button Clicked!");
});







`