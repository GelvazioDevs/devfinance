function openModal() {
  // const openModalButtons = document.querySelectorAll('.open-modal');
  // const closeModalButtons = document.querySelectorAll('.close-modal');
  const modal = document.querySelector('.modal');
  modal.classList.add('visible');

  const modalContent = document.querySelector('.modal-content');
  modalContent.classList.add('visible');
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('visible');

  const modalContent = document.querySelector('.modal-content');
  modalContent.classList.remove('visible');
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  // openModal();
});

function confirmar() {
  const form = document.querySelector("#formularioReceita");
  form.validate();
  form.submit();

  closeModal();
}
