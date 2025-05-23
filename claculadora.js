function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  if (b === 0) throw new Error("No se puede dividir entre cero");
  return a / b;
}

suma(5, 3);
resta(5, 3);
multiplicacion(5, 3);
division(5, 3);
