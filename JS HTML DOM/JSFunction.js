// https://www.w3schools.com/js/js_htmldom.asp
/*
With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
*/

//Finding HTML Elements
document.getElementById(id)	//Find an element by element id
document.getElementsByTagName(name)	//Find elements by tag name
document.getElementsByClassName(name)	//Find elements by class name
document.querySelectorAll("p.intro"); // This example returns a list of all <p> elements with class="intro".

//Changing HTML Elements
element.innerHTML =  new html content	//Change the inner HTML of an element
element.attribute = new value	//Change the attribute value of an HTML element
element.setAttribute(attribute, value)	//Change the attribute value of an HTML element
element.style.property = new style	//Change the style of an HTML element

//Adding and Deleting Elements
document.createElement(element)	//Create an HTML element
document.removeChild(element)	//Remove an HTML element
document.appendChild(element)	//Add an HTML element
document.replaceChild(element)	//Replace an HTML element
document.write(text)	//Write into the HTML output stream
document.createTextNode("This is a new paragraph.");
element.insertBefore(para,child);

//Adding Events Handlers
document.getElementById(id).onclick = function(){code} //Adding event handler code to an onclick event
element.addEventListener(event, function, useCapture) //The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
element.removeEventListener(event, function)

//Finding HTML Objects
document.anchors	//Returns all <a> elements that have a name attribute
document.body	//Returns the <body> element	1
document.images	//Returns all <img> elements	1
//https://www.w3schools.com/js/js_htmldom_document.asp
