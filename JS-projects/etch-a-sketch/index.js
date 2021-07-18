const gridSizeBtn10 = document.querySelector("#gridsize-10");
const gridSizeBtn50 = document.querySelector("#gridsize-50");
const gridContainer = document.getElementById("container");
const clearBtn = document.getElementById("clear-btn");
const erasure = document.getElementById("erasure-btn");

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

erasure.addEventListener("click", () => {
  const eraseElements = document.querySelectorAll(".griditems");

  eraseElements.forEach((eraseElements) => {
    eraseElements.addEventListener("click", () => {
      eraseElements.style.backgroundColor = "white";
    });
  });
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
  showGrid();
  shiftColor();
}
function showGrid() {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
}

function shiftColor() {
  const gridElements = document.querySelectorAll(".griditems");

  gridElements.forEach((gridElements) => {
    gridElements.addEventListener("click", () => {
      gridElements.style.backgroundColor = "black";
    });
  });
}
