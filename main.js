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

//Task 3: Handle stock availability and disable purchase button when out of stock
let stock = 5
inventoryCount = document.getElementById("inventory-count")
function updateInventory() {
        if (stock > 0) {
            purchaseButton.disabled = false;
            inventoryCount.textContent = `In Stock: ${stock}`;
        } else {
        priceElement.disabled = true;
    inventoryCount.textContent = "Out of Stock";
        }
    }
    purchaseButton.addEventListener("click", () => {
        stock--;
        updateInventory();
    });

//Task 4: Create a Checkout Event 
purchaseButton.addEventListener("click",() => {
    if (purchaseButton.disabled = false){
        alert('Thank you for your purchase!')
    } else {
        alert('Sorry, this product is currently out of stock and cannot be purchased.');
    }
});

    