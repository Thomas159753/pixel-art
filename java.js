const workspace = document.getElementById('workspace');
const btn = document.getElementById('btn');
const gridDisplay = document.getElementById('displayGridNumber');
const pencil = document.getElementById('pencil');
const eraser = document.getElementById('eraser');
const shadingButton = document.querySelector("#checkbox");
let firstGrid = 0;
let shading = false;
let usermode = 'pencil';
// buttons seting modes

pencil.addEventListener('click', function(){
  usermode = 'pencil'
})

eraser.addEventListener('click', function(){
  usermode = 'eraser'
})

btn.addEventListener('click', function() {
  
  const userInput = document.getElementById('userInput').value;

  if(firstGrid === 0 && userInput < 100) {
    createDivs(userInput);
    firstGrid++
    return firstGrid;
  }
  
  if(userInput < 100) {
    const removeDivs = document.querySelectorAll('.pixels');
    removeDivs.forEach(removeDivs => {
      workspace.removeChild(removeDivs)
    })
    createDivs(userInput);
  }
})

// --create divs faction
function createDivs (userInput){
  for (let i = 0; i < (userInput * userInput); i++) {
    const divs = document.createElement('div');
    divs.classList.add('pixels')
    workspace.appendChild(divs);
  }
  workspace.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  workspace.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  const gridDivs = document.querySelectorAll('.pixels');
  gridDivs.forEach(gridDivs => {
    gridDivs.addEventListener('click', coloring)});
}

// coloring function

function coloring(){
  if(usermode === 'pencil'){  
  this.style.backgroundColor = document.getElementById('colorpicker').value;
  console.log(usermode);}

  else if(usermode === 'eraser'){
    this.style.backgroundColor = 'white';
  }
}
// display grid numbers
userInput.addEventListener('input', updateValue);

function updateValue(e) {
  gridDisplay.textContent = `Your grid is ${e.target.value} x ${e.target.value}`;
}
//gridDivs.forEach(gridDivs => {
//gridDivs.addEventListener('click', coloring(pencil, eraser))})








