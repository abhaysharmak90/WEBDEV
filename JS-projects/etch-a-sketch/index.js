const gridSizeBtn50 = document.querySelector("#gridsize-50");
const gridSizeBtn100 = document.querySelector("#gridsize-100");
const gridContainer = document.getElementById("container");
const clearBtn = document.getElementById("clear-btn");
// console.log(clearBtn);

let gridSize;
let gridDivs = "";

gridSizeBtn50.addEventListener("click", () => {
  gridSize = 50;
  showGrid();
});

gridSizeBtn100.addEventListener("click", () => {
  gridSize = 100;
  showGrid();
});

clearBtn.addEventListener("dblclick", clearGrid);

function createGridDivs(noOfDivs) {
  for (let i = 1; i <= noOfDivs * noOfDivs; i++) {
    gridDivs += `<div class="griditems">${i}</div>`;
  }
}

function clearGrid() {
  gridDivs = "";
  gridContainer.innerHTML = gridDivs;
}

function showGrid() {
  clearGrid();
  createGridDivs(gridSize);
  gridContainer.innerHTML = gridDivs;
}
