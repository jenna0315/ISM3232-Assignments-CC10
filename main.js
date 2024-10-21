//Task 2: Add Event Listeners for Product Selection 
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");

sizeSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
});
const purchaseButton = document.getElementById("purchase-product")
purchaseButton.addEventListener("click", () => {
 purchaseButton.textContent = "Product Purchased!";
});
