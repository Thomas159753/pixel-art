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
  coloring();
})

eraser.addEventListener('click', function(){
  usermode = 'eraser'
  coloring();
})
// create button
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

// display grid numbers

userInput.addEventListener('input', updateValue);

function updateValue(e) {
  gridDisplay.textContent = `Your grid is ${e.target.value} x ${e.target.value}`;
}

// shading toggle button
shadingButton.addEventListener('click', function(){
  if (shading === false ) {
  shading = true;
  usermode = 'shading';
  }
  else {
  shading = false;
  usermode = 'pencil'
  }
})
// create divs faction
function createDivs (userInput){
  for (let i = 0; i < (userInput * userInput); i++) {
    const divs = document.createElement('div');
    divs.classList.add('pixels')
    workspace.appendChild(divs);
  }
  workspace.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  workspace.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
}

// coloring function

function coloring(){
  const gridDivs = document.querySelectorAll('.pixels');

  gridDivs.forEach((divs) => {
    divs.count = 0;
    divs.addEventListener('click', (e) =>{

      if(usermode === 'pencil'){  
        //this.style.opacity = '1';
        e.target.style.backgroundColor = document.getElementById('colorpicker').value;
      }
      
      else if(usermode === 'eraser'){
        //this.style.opacity = '1';
        e.target.style.backgroundColor = 'white';
      }
    
      else if(usermode === 'shading'){
        e.target.style.backgroundColor = '#707070';
        e.target.count += 1;
        e.target.style.opacity = 0.2 * e.target.count;
      }
    })
  })
}
//gridDivs.forEach(gridDivs => {
//gridDivs.addEventListener('click', coloring(pencil, eraser))})