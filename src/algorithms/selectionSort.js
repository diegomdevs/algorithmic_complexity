/**
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
function selectionSort(arreglo) { // O( n )
  let longitud = arreglo.length; // 0( 1 )

  for (let i = 0; i < longitud; i++) { // 0( 1 )
    let minimo = i; // 0( 1 )
    for (let j = i + 1; j < longitud; j++) { // 0( 1 )
      if (arreglo[j] < arreglo[minimo]) {
        minimo = j;
      }
    }
    if (minimo != i) {
      let temporal = arreglo[i]; // 0( 1 )
      arreglo[i] = arreglo[minimo];
      arreglo[minimo] = temporal;
    }
  }
  return arreglo;
}
