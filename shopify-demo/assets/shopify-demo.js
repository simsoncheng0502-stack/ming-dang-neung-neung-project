const qtyInput = document.querySelector("[data-qty]");
const subtotalEls = document.querySelectorAll("[data-subtotal]");
const unitPrice = 580;

function formatPrice(value) {
  return `HK$${value.toLocaleString("en-HK")}`;
}

function updateTotals() {
  if (!qtyInput) return;
  const qty = Math.max(1, Number(qtyInput.value) || 1);
  qtyInput.value = qty;
  subtotalEls.forEach((el) => {
    el.textContent = formatPrice(unitPrice * qty);
  });
}

document.querySelectorAll("[data-qty-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!qtyInput) return;
    const action = button.dataset.qtyAction;
    const next = Number(qtyInput.value || 1) + (action === "plus" ? 1 : -1);
    qtyInput.value = Math.max(1, next);
    updateTotals();
  });
});

if (qtyInput) {
  qtyInput.addEventListener("change", updateTotals);
  updateTotals();
}

document.querySelectorAll("[data-demo-payment]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "thanks.html";
  });
});
