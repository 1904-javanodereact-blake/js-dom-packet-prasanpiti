// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA(nodeStart){
    for(let i = 0; i < nodeStart.childNodes.length; i++) {
        if(nodeStart.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            getUSA(nodeStart.childNodes[i]);
        } else if(nodeStart.childNodes[i].nodeType === Node.TEXT_NODE) {
            if(nodeStart.childNodes[i].nodeValue === 'USA') {
                console.log(nodeStart.childNodes[i].nodeValue);
            }
        }
    }
}
getUSA(document.documentElement);

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    let employees = document.getElementsByClassName('empName');
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].nextSibling.nextSibling.innerText === 'Sales') {
            console.log(employees[i].innerText);
        }
    }
}
getPeopleInSales();

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    let ancChildren = document.querySelectorAll('a > span');
    for(let i = 0; i < ancChildren.length; i++) {
        console.log(ancChildren[i].innerText);
    }
}
getAnchorChildren();


// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
    let chk = document.querySelector('[name=hobbies]');
    for(let i = 0; i < chk.length; i++) {
        if(chk[i].getAttribute('selected') === 'selected') {
            console.log(chk[i].value);
            console.log(chk[i].innerText);
        }
    }
}
getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

function getCustomAttribute() {
    let cus = document.querySelectorAll('[data-customAttr]');
    for(let i = 0; i < cus.length; i++) {
        console.log(cus[i].getAttribute('data-customAttr'));
        console.log(cus[i].nodeName);
    }
}
getCustomAttribute();

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  

let sumNode = document.getElementById('sum');
let previousValueNum1 = 0;
let currentValueNum1 = 0;
let previousValueNum2 = 0;
let currentValueNum2 = 0;
let sum = 0;
document.getElementById('num1').addEventListener('change', (e) => {
    currentValueNum1 = +e.srcElement.value;
    console.log(`current value = ${currentValueNum1}`);
    console.log(`previous value = ${previousValueNum1}`);
    sum -= previousValueNum1;
    previousValueNum1 = currentValueNum1;
    sum += currentValueNum1;
    if(sum) {
        sumNode.innerText = sum;
    } else {
        sumNode.innerText = 'Cannot add';
    }
});
document.getElementById('num2').addEventListener('change', (e) => {
    currentValueNum2 = +e.srcElement.value;
    console.log(`current value = ${currentValueNum2}`);
    console.log(`previous value = ${previousValueNum2}`);
    sum -= previousValueNum2;
    previousValueNum2 = currentValueNum2;
    sum += currentValueNum2;
    if(sum) {
        sumNode.innerText = sum;
    } else {
        sumNode.innerText = 'Cannot add';
    }
});

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let skillNode = document.querySelector('[name = skills]');
console.log(skillNode.nodeName);
skillNode.addEventListener('change', (e) => {
    alert(`Are you sure ${e.srcElement.value} is one of your skills?`)
});

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let favColorRadios = document.querySelectorAll('[name = favoriteColor]');
let previousColor = '';
let currentColor = '';
for(let i = 0; i < favColorRadios.length; i++) {
    favColorRadios[i].addEventListener('change', (e) => {
        currentColor = e.srcElement.value;
        alert(`So you like ${currentColor} ${previousColor} now?`);
        previousColor = `more than ${currentColor}`;
    });
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

let empNames = document.querySelectorAll('.empName');
for(let i = 0; i < empNames.length; i++) {
    let name = empNames[i].innerHTML;
    empNames[i].addEventListener('mouseover', (e) => {
        if(e.srcElement.innerHTML === '') {
            e.srcElement.innerHTML = name;
        } else {
            e.srcElement.innerHTML = '';
        }
    });
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

let timeDisplayNode = document.getElementById('currentTime');
setInterval( () => {
    timeDisplayNode.innerHTML = new Date().toLocaleTimeString('en-US', {hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric'});
}, 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

let hNode = document.getElementById('helloWorld');
hNode.addEventListener('click', (e) => {
    let eNode = e.srcElement;
    console.log(eNode.nodeName);
    setTimeout( (fNode) => {
        fNode.style.color = '#'+Math.random().toString(16).substr(-6);
    }, 3000, eNode);
});

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node , func) {
    for(let i = 0; i < node.childNodes.length; i++) {
        if(node.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            func(node.childNodes[i]);
            walkTheDOM(node.childNodes[i], func);
        } else {
            func(node.childNodes[i]);
        }
    }
}
walkTheDOM(document.documentElement, (node) => {
    if(node.nodeType === Node.ELEMENT_NODE) {
        console.log(node.nodeName);
    } else if(node.nodeType === Node.TEXT_NODE) {
        console.log(node.nodeValue);
    }
    
});


