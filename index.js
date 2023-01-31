let count = 0;
let countStr = "";
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count++;
  countEl.textContent = count;
}

function decrement() {
  count--;
  countEl.textContent = count;
}

function save() {
  countStr = count + " | ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}

function clearHistory() {
  countStr = " ";
  saveEl.textContent = "Previous entries: " + countStr;
  count = 0;
  countEl.textContent = count;
  console.log("hello");
}
