const workspace = document.getElementById('workspace');
const btn = document.getElementById('btn');
const gridDisplay = document.getElementById('displayGridNumber');
const pencil = document.getElementById('pencil');
const eraser = document.getElementById('eraser');
// const shadingButton = document.querySelector("#checkbox");
const Rbow = document.getElementById('rainbow')
let firstGrid = 0;
let usermode = 'pencil';

// buttons seting modes

pencil.addEventListener('click', function(){
  usermode = 'pencil'
})

eraser.addEventListener('click', function(){
  usermode = 'eraser'
})

// shadingButton.addEventListener('click', function(){
//   usermode = 'shading';
// })

Rbow.addEventListener('click', function(){
  usermode = 'rainbow';
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

// create divs faction
function createDivs (userInput){
  for (let i = 0; i < (userInput * userInput); i++) {
    const divs = document.createElement('div');
    divs.classList.add('pixels')
    workspace.appendChild(divs);
  }
  workspace.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  workspace.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  const gridDivs = document.querySelectorAll('.pixels');
  gridDivs.forEach((divs) => {
    divs.addEventListener('click', coloring);
  })
}

// coloring function

function coloring(e){
    // const gridDivs = document.querySelectorAll('.pixels');
    // divs.count = 0;
      if(usermode === 'pencil'){  
        e.target.style.backgroundColor = document.getElementById('colorpicker').value;
        e.target.style.opacity = 1;
      }
      
      else if(usermode === 'eraser'){
        e.target.style.backgroundColor ='white';
        e.target.style.opacity = 1;
      }
    
      // else if(usermode === 'shading'){
      //   e.target.style.backgroundColor = '#707070';
      //   e.target.count += 1;
      //   e.target.style.opacity = 0.2 * e.target.count;
      // }

      else if(usermode === 'rainbow'){
        let R = rainbowGenerator();
        let G = rainbowGenerator();
        let B = rainbowGenerator();
        e.target.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
      }
}

function rainbowGenerator() {
  numberArray = []
  for (let i = 0; i <= 255; i++) {
    let number = i
    numberArray[i] = number;
   }
  let randomColour = Math.floor(Math.random() * numberArray.length);
  return randomColour;
  }