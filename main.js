function fibonacci(firstNumber, secondNumber, limit) {
  const result = []; // Para guardar resultado
  let aux = 0;  // Para guardar suma

  result.push(firstNumber); //Mete los 2 primeros números en el array
  result.push(secondNumber);

  aux = firstNumber + secondNumber; //Primera suma

  while (aux < limit) { // Bucle que suma hasta que se llegue al limite
    result.push(aux);
    firstNumber = secondNumber;
    secondNumber = aux;
    aux = firstNumber + secondNumber;
  }
  console.log(result); // Muestra el array
}
fibonacci(0, 1, 1000)