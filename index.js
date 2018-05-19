function add(a, b) {
  var result = a + b;
  return result;
}

function substract(a, b) {
  var result = a - b;
  return result;
}

function multiply(a, b) {
  var result = a * b;
  return result;
}

function divide(a, b) {
  var result = a / b;
  return result;
}

function inc(n) {
  n += 1;
  return n += 1;
}
function dec(n) {
  return n -= 1;
}

function makeInt(n) {
  return n.parseInt(n, 10);
}

function preserveDecimal(n) {
  return n.parseFloat(n);
}