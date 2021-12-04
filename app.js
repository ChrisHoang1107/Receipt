const item = {
  name: "item 1",
  price: 10.99,
};

const itemName = document.querySelector(".name");
const quantity = document.querySelector(".quantity");
const rm = document.querySelector(".delete");
const price = document.querySelector(".price");
const add = document.querySelector(".add");
const summary = document.querySelector(".summary");
const tax = document.querySelector(".tax");
const total = document.querySelector(".total");

let count = 0;

//function to add more items
function addItems() {
  count++;
  itemName.textContent = item.name;
  price.textContent = parseFloat(item.price * count).toFixed(2);
  quantity.textContent = count;
  totalPay();
}

//Function to remove item
function rmItems() {
  if (count > 0) {
    count--;
    quantity.textContent = count;
    price.textContent = item.price * count;
    totalPay();
  } else {
    alert("There is no More item in your cart to remove!");
    return (price.textContent = "0.00");
  }
}

//Function count total
function totalPay() {
  summary.textContent = price.textContent;
  tax.textContent = parseFloat(summary.textContent * 0.13).toFixed(2);
  total.textContent = parseFloat(
    parseFloat(summary.textContent) + parseFloat(tax.textContent)
  ).toFixed(2);
}
add.addEventListener("click", addItems);
rm.addEventListener("click", rmItems);
