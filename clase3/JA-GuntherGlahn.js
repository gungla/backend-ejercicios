const mostarPalabras = (texto, tiempo = 1000, numPalabras = 0) => {
  const word = texto.split(' ')
  let contador = 0

  return new Promise((res, rej) => {
    const timer = setInterval(() => {
      if (word[contador]) {
        console.log(word[contador]);
        contador++;
        numPalabras++;
      } else {
        clearInterval(timer);
        res(numPalabras);
      }
    }, tiempo)
  })
}

mostarPalabras('uno')
  .then((numPalabras) => mostarPalabras('dos', 2000, numPalabras))
  .then((numPalabras) => mostarPalabras('tres', 3000, numPalabras))
  .then((numPalabras) => console.log('proceso completo, hay', numPalabras + ' palabras en total'))