const createOrderBtn = document.querySelector('#create-order-btn');
const titleInput = document.getElementById('order-title');
const documentInput = document.getElementById('document');

titleInput.addEventListener('input', toggleCreateOrderBtn);
documentInput.addEventListener('change', toggleCreateOrderBtn);

// Disable Create Order Button if title and documents are not provided
function toggleCreateOrderBtn() {
  if (titleInput.value && documentInput.value) {
    createOrderBtn.removeAttribute('disabled');
  } else {
    createOrderBtn.setAttribute('disabled', true);
  }
}
