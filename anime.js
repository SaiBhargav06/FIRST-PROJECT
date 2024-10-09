let stack = [];
const max = 6;
function push() {
  const inputValue = document.getElementById("input-value").value;

  if (inputValue === "") {
    alert("Please enter a value to push!");
    return;
  }

  if (stack.length >= max) {
    alert("Stack Overflow: Maximum stack size reached.");
    return;
  }

  stack.push(inputValue);
  renderStack();
  document.getElementById("input-value").value = "";
}

// Pop function
function pop() {
  if (stack.length === 0) {
    alert("Stack Underflow: No elements to pop.");
    return;
  }

  const poppedElement = stack.pop();
  renderStack(poppedElement);
}

// Function to render the stack
function renderStack(poppedElement = null) {
  const stackContainer = document.getElementById("stack-container");
  stackContainer.innerHTML = ""; // Clear the previous stack

  // Display each element in the stack
  stack.forEach((element, index) => {
    const stackElement = document.createElement("div");
    stackElement.classList.add("stack-element");
    stackElement.style.bottom = `${index * 50}px`; // Set the position dynamically
    stackElement.textContent = element;
    stackContainer.appendChild(stackElement);
  });

  // Animate pop
  if (poppedElement !== null) {
    const lastElement = document.createElement("div");
    lastElement.classList.add("stack-element");
    lastElement.style.bottom = `${stack.length * 50}px`; // Set position for popped element
    lastElement.style.backgroundColor = "lightpink"; // Change color for pop animation
    lastElement.textContent = poppedElement;
    lastElement.style.animation = "pop-animation 0.5s ease-in-out forwards";
    stackContainer.appendChild(lastElement);

    setTimeout(() => {
      stackContainer.removeChild(lastElement); // Remove the popped element after animation
    }, 500);
  }
}
