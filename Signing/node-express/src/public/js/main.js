const createOrderBtn = document.querySelector('#create-order-btn');
const titleInput = document.getElementById('order-title');
const documentInput = document.getElementById('document');
const signatoryInput = document.getElementById('signatory');

titleInput.addEventListener('input', toggleCreateOrderBtn);
documentInput.addEventListener('change', toggleCreateOrderBtn);

// Disable Create Order Button initially
function toggleCreateOrderBtn() {
  if (titleInput.value && documentInput.value) {
    createOrderBtn.removeAttribute('disabled');
  } else {
    createOrderBtn.setAttribute('disabled', true);
  }
}

// Add signatory
function addSignatory() {
  const name = signatoryInput.value;
  if (name) {
    signatories.push(name);
    signatoryInput.value = '';
    toggleCreateOrderBtn();
  }
}
