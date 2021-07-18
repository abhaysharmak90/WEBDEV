const gridSizeBtn10 = document.querySelector("#gridsize-10");
const gridSizeBtn50 = document.querySelector("#gridsize-50");
const gridContainer = document.getElementById("container");
const clearBtn = document.getElementById("clear-btn");

let gridSize;
let gridDivs = "";

gridSizeBtn10.addEventListener("click", () => {
  gridSize = 10;
  showDivs();
});

gridSizeBtn50.addEventListener("click", () => {
  gridSize = 50;
  showDivs();
});

clearBtn.addEventListener("dblclick", clearGrid);

function createGridDivs(noOfDivs) {
  for (let i = 1; i <= noOfDivs * noOfDivs; i++) {
    gridDivs += `<div class="griditems"></div>`;
  }
}

function clearGrid() {
  gridDivs = "";
  gridContainer.innerHTML = gridDivs;
}

function showDivs() {
  clearGrid();
  createGridDivs(gridSize);
  gridContainer.innerHTML = gridDivs;
}
