// Wait until the page content is loaded
window.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".plus-btn");
  const minusButtons = document.querySelectorAll(".minus-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const likeButtons = document.querySelectorAll(".like-btn");
  const prices = document.querySelectorAll(".item-price");
  const quantities = document.querySelectorAll(".item-qty");
  const totalDisplay = document.getElementById("total-price");

  // Update total price
  function updateTotal() {
    let total = 0;
    prices.forEach((priceEl, index) => {
      const price = parseFloat(priceEl.textContent.replace("$", ""));
      const qty = parseInt(quantities[index].textContent);
      total += price * qty;
    });
    totalDisplay.textContent = `$${total.toFixed(2)}`;
  }

  // Increase quantity
  plusButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      quantities[index].textContent = parseInt(quantities[index].textContent) + 1;
      updateTotal();
    });
  });

  // Decrease quantity
  minusButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let currentQty = parseInt(quantities[index].textContent);
      if (currentQty > 1) {
        quantities[index].textContent = currentQty - 1;
        updateTotal();
      }
    });
  });

  // Delete item
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".cart-item");
      item.remove();
      updateTotal();
    });
  });

  // Like item
  likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
    });
  });

  // Initial total
  updateTotal();
});
