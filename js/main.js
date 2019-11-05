/*----- constants -----*/
/*----- app's state (variables) -----*/
var count;


/*----- cached element references -----*/
var displayEl = document.querySelector('h1 span');
var inpEl = document.getElementById('num');


/*----- event listeners -----*/
document.querySelector('#sum').addEventListener('click', function() {
    count += parseFloat(inpEl.value);
    inpEl.value = '1';
    render();
  });

document.querySelector('#sub').addEventListener('click', function() {
    count -= parseFloat(inpEl.value);
    inpEl.value = '1';
    render();
  });  

/*----- functions -----*/

function init() {
    inpEl.value = 1
    count = 0

    render();
  }

  function render() {
    displayEl.textContent = count;
    displayEl.style.color = count >= 0 ? 'green' : 'red';
  }
  
  init();