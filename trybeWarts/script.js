const getPassword = document.querySelector('#password');
const getEmail = document.querySelector('#email');
const getButton = document.querySelector('#btn-login');
const getCheckbox = document.querySelector('#agreement');
const getBtnSubmit = document.querySelector('#submit-btn');
const getText = document.querySelector('#textarea');
const getCount = document.querySelector('#counter');

function validLogin() {
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
getButton.addEventListener('click', validLogin);

window.onload = () => {
  getBtnSubmit.disabled = true;
};

function checkboxTrue() {
  if (getCheckbox.checked) {
    getBtnSubmit.disabled = false;
  }
}
getCheckbox.addEventListener('click', checkboxTrue);
// Formulada com a ajuda do stackoverflow
getCount.innerHTML = 500;

function contador(event) {
  getCount.innerHTML = 500;
  getCount.innerHTML -= event.target.value.length;
}
getText.addEventListener('keyup', contador);
