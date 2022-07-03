const workspace = document.getElementById('workspace');
const btn = document.getElementById('btn');
const gridDisplay = document.getElementById('displayGridNumber');
let firstGrid = 0;

// ------------------------ creates divs
btn.addEventListener('click', function(gridDivs) {
  
  if(firstGrid === 0) {
    const divNumber = document.getElementById('divNumber').value;
    createDivs(divNumber);
    firstGrid++
  }
  
  else {
    const removeDivs = document.querySelectorAll('div.pixels');
    removeDivs.forEach(removeDivs => {
      workspace.removeChild(removeDivs)
      const divNumber = document.getElementById('divNumber').value;
      createDivs(divNumber);
    })
  }
})

function createDivs (divNumber){
  for (let i = 0; i < divNumber; i++) {
    const divs = document.createElement('div');
    divs.classList.add('pixels')
    workspace.appendChild(divs);
  }
  // --------------------coloring grids
  const gridDivs = document.querySelectorAll('div.pixels');
  gridDivs.forEach(gridDivs => {
    gridDivs.addEventListener('click', function(){
      gridDivs.style.backgroundColor = 'white';
    })
  })
}
//---------------------display grid numbers

divNumber.addEventListener('input', updateValue);

function updateValue(e) {
  gridDisplay.textContent = `Your grid is ${e.target.value} x ${e.target.value}`;
}



  