//the dom (Document Object Model) is a tree structure that represents the HTML document
// as a hierarchy of nodes. Each node represents an element, attribute, or text in the document.
// The DOM allows JavaScript to interact with the HTML document, enabling dynamic content updates and manipulation      
// of the document structure.
// The DOM is a programming interface for web documents, allowing scripts to update the content, structure, and style of a document.
// It represents the document as a tree of objects, where each object corresponds to a part of the document.
// The DOM is created by the browser when it loads a web page, and it can be manipulated using JavaScript.
// The DOM is a tree structure that represents the HTML document as a hierarchy of nodes.
// Each node represents an element, attribute, or text in the document.
// The DOM allows JavaScript to interact with the HTML document, enabling dynamic content updates and manipulation of the document structure.
// The DOM is a programming interface for web documents, allowing scripts to update the content, structure, and style of a document.
// It represents the document as a tree of objects, where each object corresponds to a part of the document.
// The DOM is created by the browser when it loads a web page, and it can be
// manipulated using JavaScript.
// The DOM is a tree structure that represents the HTML document as a hierarchy of nodes.
// Each node represents an element, attribute, or text in the document.
// The DOM allows JavaScript to interact with the HTML document, enabling dynamic content updates and manipulation of the document structure.
// The DOM is a programming interface for web documents, allowing scripts to update the content, structure, and style of a document.
// It represents the document as a tree of objects, where each object corresponds to a part of
// the document.


//accessing the DOM
// The DOM can be accessed using the `document` object in JavaScript.
// The `document` object provides methods and properties to interact with the HTML document.
//getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll are some of the methods used to access elements in the DOM.
// These methods allow you to select elements based on their ID, class, tag name, or CSS selector.

// For example, to access an element with the ID "myElement":
const myElement = document.getElementById("myElement");
// To access all elements with the class "myClass":
const myElements = document.getElementsByClassName("myClass");
// To access all <p> elements:
const paragraphs = document.getElementsByTagName("p");
// To access the first element that matches a CSS selector:
const firstDiv = document.querySelector("div");
// To access all elements that match a CSS selector:
const allDivs = document.querySelectorAll("div");
// These methods return either a single element or a collection of elements, which can then be manipulated using JavaScript.


// For example, you can change the text content of an element:
myElement.textContent = "New Text Content";
// You can also add or remove classes, change styles, or modify attributes of the elements.
// For example, to add a class to an element:
myElement.classList.add("newClass");
// To remove a class from an element:
myElement.classList.remove("oldClass");
// To change the style of an element:
myElement.style.color = "blue";
// To set an attribute of an element:
myElement.setAttribute("data-custom", "value");
// To get the value of an attribute:
const customValue = myElement.getAttribute("data-custom");
// To remove an attribute from an element:
myElement.removeAttribute("data-custom");
// To create a new element and append it to the DOM:
const newElement = document.createElement("div");   
newElement.textContent = "I am a new element!";
document.body.appendChild(newElement);

//changing the content 
//text context vs innerHTML
// The `textContent` property sets or returns the text content of an element and its descendants.
// It does not parse HTML tags, meaning it treats everything as plain text.
// The `innerHTML` property sets or returns the HTML content of an element.
// It parses HTML tags, allowing you to insert HTML elements and content.
// For example, to set the text content of an element:
myElement.textContent = "This is plain text.";
// To set the inner HTML of an element:
myElement.innerHTML = "<strong>This is bold text.</strong> <em>This is italic text.</em>";
// The `textContent` property is safer to use when you want to avoid executing any scripts or parsing HTML,
// while `innerHTML` is useful when you want to insert HTML content into the document.
// The `innerText` property is similar to `textContent`, but it takes into account the CSS styles applied to the element.
// It returns the visible text content of an element, excluding hidden elements.
// For example, to get the visible text content of an element:
const visibleText = myElement.innerText;
// To set the visible text content of an element:
myElement.innerText = "This is visible text.";
// The `innerText` property is useful when you want to get or set the text content while considering the CSS styles,
// such as when some text is hidden using CSS (e.g., `display: none;`).
// The `outerHTML` property sets or returns the HTML content of an element, including the element itself.
// It allows you to replace the entire element with new HTML content.
// For example, to replace an element with new HTML content:
myElement.outerHTML = "<div class='new-element'>This is a new element.</div>";

// The `outerHTML` property is useful when you want to replace an entire element with new HTML content,
// including the element itself, rather than just modifying its inner content.
// The `innerHTML` property is similar to `outerHTML`, but it only modifies the content inside the element,
// leaving the element itself intact.
// For example, to modify the inner content of an element:
myElement.innerHTML = "<span>This is new content inside the element.</span>";

// The `innerHTML` property is useful when you want to change the content inside an element without replacing the element itself.
// The `outerHTML` property is useful when you want to replace the entire element with new HTML content,
// including the element itself, while `innerHTML` is used to modify the content inside the
// element without changing the element itself.
// The `textContent` property sets or returns the text content of an element and its descendants.
// It does not parse HTML tags, meaning it treats everything as plain text.
// For example, to set the text content of an element:
myElement.textContent = "This is plain text.";

//changing the style
// The `style` property allows you to change the inline styles of an element.
// You can set individual CSS properties using the `style` object.
// For example, to change the background color and font size of an element:
myElement.style.backgroundColor = "lightblue";
myElement.style.fontSize = "20px";
// You can also set multiple styles at once using the `cssText` property:
myElement.style.cssText = "color: red; font-weight: bold;";
// The `style` property is useful for dynamically changing the appearance of elements without modifying the CSS files.
// You can also add or remove classes from an element using the `classList` property.
// The `classList` property provides methods to manipulate the classes of an element.
myElement.classList.add("newClass"); // Add a class
myElement.classList.remove("oldClass"); // Remove a class
myElement.classList.toggle("toggleClass"); // Toggle a class
// You can check if an element has a specific class using the `contains` method:
const hasClass = myElement.classList.contains("newClass"); // Returns true if the class exists
// The `classList` property is useful for managing classes dynamically, allowing you to add,
// remove, or toggle classes without directly manipulating the `className` string.
// The `setAttribute` method allows you to set an attribute on an element.
// For example, to set a custom data attribute on an element:
myElement.setAttribute("data-custom", "value");
// You can also set standard attributes like `id`, `class`, or `src`:
myElement.setAttribute("id", "myNewId");
myElement.setAttribute("class", "myNewClass");

//create , insert and remove elements
// The `createElement` method allows you to create a new HTML element.
// For example, to create a new `<div>` element:
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div element!";
// You can also set attributes and styles on the new element:
newDiv.setAttribute("class", "new-div");
newDiv.style.color = "blue";

// To insert the new element into the DOM, you can use methods like `appendChild`, `insertBefore`, or `replaceChild`.
// For example, to append the new element to the body:
document.body.appendChild(newDiv);
// To insert the new element before an existing element:
const existingElement = document.getElementById("existingElement");
document.body.insertBefore(newDiv, existingElement);
// To replace an existing element with the new element:
document.body.replaceChild(newDiv, existingElement);
// To remove an element from the DOM, you can use the `remove` method or the `parentNode.removeChild` method.
// For example, to remove an element:
existingElement.remove(); // Using the remove method
// Or using the parentNode method:
if (existingElement.parentNode) {
    existingElement.parentNode.removeChild(existingElement);
}
// The `removeChild` method allows you to remove a specific child element from its parent.
// For example, to remove the new element we created earlier:
if (newDiv.parentNode) {
    newDiv.parentNode.removeChild(newDiv);
}
// The `remove` method is a more straightforward way to remove an element, while `removeChild` is useful when you need to remove a specific child from its parent.
// The `replaceChild` method allows you to replace an existing child element with a new element.
// For example, to replace an existing element with the new element we created earlier:
if (existingElement.parentNode) {
    existingElement.parentNode.replaceChild(newDiv, existingElement);
}

