let result;

function add(a, b) {
  return a + b;
}

function subtarct(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modules(a, b) {
  return a % b;
}

function oprate(oprend1, oprend2, oprator) {
  switch (oprator) {
    case "+":
      result = add(oprend1, oprend2);
      console.log(result);
      break;
  }
}
