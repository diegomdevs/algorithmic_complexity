/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( n )
 */
function primalidadTest(numero) { // O ( 1 )

  if (numero <= 3) {
    return true;
  }

  if (numero % 1 !== 0) {
    return false;
  }

  if (numero <= 1) {
    return false;
  }

  if (numero % 2 === 0) {
    return false;
  }

  const limiteDivisor = Math.sqrt(numero); // O ( 1 )
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) { // O ( n )
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}
