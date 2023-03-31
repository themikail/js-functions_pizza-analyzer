console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  calculatePizzaGain();
});

pizzaInput2.addEventListener("input", () => {
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  calculatePizzaGain();
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain() {
  const gain = pizzaInput2.value - pizzaInput1.value;
  updateOutputColor(gain);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizza, value) {
  pizza.style.transform = `scale(${value / 10})`;
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(gain) {
  if (gain >= 0) {
    output.style.color = "green";
  } else {
    output.style.color = "red";
  }
  output.innerText = gain;
}
