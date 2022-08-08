// requisito 1
const getBody = document.querySelector('body');
getBody.style.margin = '10%';
getBody.style.textAlign = 'center';
function createH1() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Paleta de Cores';
  title.style.textAlign = 'center';
  getBody.appendChild(title);
}
createH1();
// requisito 2 e 3
function createColorsF() {
  const createParentDiv = document.createElement('section');
  createParentDiv.id = 'color-palette';
  createParentDiv.style.justifyContent = 'center';
  getBody.appendChild(createParentDiv);
  const colors = ['black', 'green', 'yellow', 'red'];
  for (let i = 0; i < 4; i += 1) {
    const createColors = document.createElement('div');
    createColors.classList.add('color');
    createColors.style.backgroundColor = colors[i];
    createColors.style.border = 'solid 1px black';
    createColors.style.height = '40px';
    createColors.style.width = '40px';
    createColors.style.borderRadius = '40px';
    createColors.style.padding = '5px';
    createColors.style.margin = '3px';
    createParentDiv.style.display = 'flex';
    createParentDiv.appendChild(createColors);
  }
}
createColorsF();

// criando botão limpar

function createBtnF() {
  const createBtnSection = document.createElement('section');
  createBtnSection.id = 'sectionParent';
  getBody.appendChild(createBtnSection);
  const createBtn = document.createElement('button');
  createBtn.id = 'clear-board';
  createBtn.innerHTML = 'Limpar';
  createBtnSection.appendChild(createBtn);
  createBtn.style.display = 'flex';
  createBtn.style.maxWidth = '60px';
  createBtn.style.margin = 'auto';
  createBtn.style.marginTop = '10px';
}
createBtnF();

// criando input de novo tamanho do quadro de pixels.

function createInput() {
  const createOtherSection = document.createElement('div');
  getBody.appendChild(createOtherSection);
  const createInputBorder = document.createElement('Input');
  const createBtnBorder = document.createElement('button');
  createInputBorder.id = 'board-size';
  createInputBorder.value = 1;
  createBtnBorder.innerHTML = 'VQV';
  createBtnBorder.id = 'generate-board';
  createOtherSection.appendChild(createInputBorder);
  createOtherSection.appendChild(createBtnBorder);
  createInputBorder.style.maxWidth = '60px';
  createInputBorder.style.marginTop = '10px';
  createBtnBorder.style.maxWidth = '60px';
  createBtnBorder.style.marginTop = '10px';
  createInputBorder.type = 'number';
}
createInput();

// requisito 4

const createPixel = document.createElement('section');
createPixel.id = 'pixel-board';
createPixel.style.display = 'flex';
createPixel.style.flexWrap = 'wrap';
createPixel.style.margin = 'auto';
createPixel.style.justifyContent = 'center';
createPixel.style.maxWidth = '230px';
createPixel.style.padding = '10px';
getBody.appendChild(createPixel);

// requisito 5

function createPixelsF() {
  for (let i = 0; i < 25; i += 1) {
    const createPixels = document.createElement('div');
    createPixels.classList.add('pixel');
    createPixels.style.backgroundColor = 'white';
    createPixels.style.height = '40px';
    createPixels.style.width = '40px';
    createPixels.style.border = '1px black solid';
    createPixel.appendChild(createPixels);
  }
}
createPixelsF();
// requisito 6
const getFirstColor = document.querySelector('.color');
getFirstColor.classList.add('selected');
// requisito 7
function removeClass() {
  const colorSelected = document.querySelector('#color-palette');
  colorSelected.addEventListener('click', (event) => {
    const value = event.target;
    if (value.classList.contains('color')) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      value.classList.add('selected');
    }
  });
}
removeClass();
// requisito 8
function pixelClick() {
  const pixelSelected = document.querySelector('#pixel-board');
  pixelSelected.addEventListener('click', (event) => {
    const value = event.target;
    console.log(value);
    if (value.classList.contains('pixel')) {
      const selected = document.querySelector('.selected');
      value.style.backgroundColor = selected.style.backgroundColor;
    } else {
      value.style.backgroundColor = 'white';
    }
  });
}
pixelClick();

// requisito 9

function clearPixels() {
  const getBtn = document.querySelector('#clear-board');
  const getPixel = document.querySelectorAll('.pixel');

  getBtn.addEventListener('click', () => {
    for (let i = 0; i < getPixel.length; i += 1) {
      getPixel[i].style.backgroundColor = 'white';
    }
  });
}
clearPixels();

// requisito 10

function createPixelBoard(size) {
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.innerHTML = '';
  getBody.appendChild(pixelBoard);
  for (let line = 0; line < size; line += 1) {
    const lineElement = document.createElement('div');
    lineElement.classList.add('line');

    for (let column = 0; column < size; column += 1) {
      const columnElement = document.createElement('div');
      columnElement.classList.add('column');
      lineElement.appendChild(columnElement);
    }
    pixelBoard.appendChild(lineElement);
  }
}
createPixelBoard(5);

function pixelBoardListener() {
  const pixelBoard = document.querySelector('#generate-board');
  pixelBoard.addEventListener('click', () => {
    const input = document.querySelector('#board-size');
    if (!input.value) {
      alert('Board inválido!');
    } else if (input.value < 5) {
      createPixelBoard(5);
    } else if (input.value > 50) {
      createPixelBoard(5);
    } else {
      createPixelBoard(input.value);
    }
  });
}
pixelBoardListener();
// createInputBorder.id = 'board-size';
// createBtnBorder.id = 'generate-board';

// alterações pessoais:

const createBackgroundImg = document.querySelector('body');
createBackgroundImg.style.backgroundImage = 'url(/pixels-art/mountains-g6d7571f80_1920.jpg)';
createBackgroundImg.style.backgroundSize = 'cover';
createBackgroundImg.style.backgroundRepeat = 'no-repeat';
createBackgroundImg.style.backgroundPosition = 'center';
createBackgroundImg.style.backgroundAttachment = 'fixed';

/*
const getPixel = document.querySelector('.pixel');
getPixel.addEventListener('click', function (event) {
  for (let i = 0; i < getPixel.length; i += 1) {
    if (getPixel[i].style.backgroundColor === 'white') {
        const getCurrentClass = document.querySelector('.selected');
        const currentValue = getCurrentClass.style.backgroundColor.event.target
        getPixel[i].style.backgroundColor = currentValue
    }
  }
});
*/
