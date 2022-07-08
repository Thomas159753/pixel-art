const workspace = document.getElementById('workspace');
const btn = document.getElementById('btn');
const gridDisplay = document.getElementById('displayGridNumber');
let firstGrid = 0;

// ------------------------ creates divs button
btn.addEventListener('click', function() {
  
  const userInput = document.getElementById('userInput').value;
//       unnecessary this but im keeping it just in case
  if(userInput > 100){ //
    alert("Maximu pixels is 100");// unnecessary but im keeping it for failsafe
  } //

  if(firstGrid === 0 && userInput < 100) {
    createDivs(userInput);
    firstGrid++
  }
  
  if(userInput < 100) {
    const removeDivs = document.querySelectorAll('div.pixels');
    removeDivs.forEach(removeDivs => {
      workspace.removeChild(removeDivs)
    })
    createDivs(userInput);
  }
})
// ---------------------function that makes the grids
function createDivs (userInput){
  for (let i = 0; i < (userInput * userInput); i++) {
    const divs = document.createElement('div');
    divs.classList.add('pixels')
    workspace.appendChild(divs);
  }
  // ---------------------grid div placement

  workspace.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  workspace.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  // --------------------coloring grids
const gridDivs = document.querySelectorAll('div.pixels');
  gridDivs.forEach(gridDivs => {
    gridDivs.addEventListener('click', function(){
    gridDivs.style.backgroundColor = 'black';
    })
  })
}
//---------------------display grid numbers

userInput.addEventListener('input', updateValue);

function updateValue(e) {
  gridDisplay.textContent = `Your grid is ${e.target.value} x ${e.target.value}`;
}

  