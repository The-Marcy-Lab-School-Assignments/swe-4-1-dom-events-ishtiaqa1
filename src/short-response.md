# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

The specific error is a `TypeError`. This occurs because the script is loaded in the `<head>` before the **DOM** has finished loading, so `document.querySelector('#my-button')` `returns` `null`. The fix is to either move the `<script>` tag to the bottom of the `<body>`.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**

`event.target` refers to the actual element that was clicked, which in this case is the `<button>`. `event.currentTarget` refers to the element that the **event listener** is attached to, which is the `<div id="button-container">`. They are different because the **click event** **bubbles** from the `button` up to the `div`, triggering the `div’s` **event listener**. This demonstrates **event bubbling** in the **DOM**.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**

The issue is that the created elements are never appended to the `productCard` `div`. Although `productCard` is added to the **DOM**, it is empty, so nothing is displayed. The fix is to append `productImage`, `productName`, and `productPrice` to `productCard` before appending `productCard` to `document.body`. Without this, the elements exist in memory but are not part of the **DOM**.

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

This approach is called **event delegation**, where a single **event listener** is attached to a parent element instead of individual child elements. The alternative is adding separate **event listeners** to each `<li>`, which is less efficient and harder to maintain, especially for dynamically added items. **Event delegation** is better because it leverages **event bubbling** and reduces the number of **event listeners**.

The `event.target.closest('li')` method finds the nearest ancestor `<li>` element of whatever was clicked. This is essential because the user may click on a `<p>` inside the `<li>`, and `closest('li')` ensures the correct list item is selected. It allows the handler to work regardless of which child element was clicked.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

`querySelector()` `returns` only the first matching element, while `querySelectorAll()` `returns` a `NodeList` of all matching elements. For example, you would use `querySelectorAll('.todo-item')` to select and loop over multiple todo items.

A `NodeList` is array-like but is not a true array, so it does not support all array methods such as `map()` and `filter()`. This is important because you may need to convert a `NodeList` to an array using `Array.from()` if you want to use array functionality.
