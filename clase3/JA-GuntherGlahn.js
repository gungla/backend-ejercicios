
const termina = () => {
        console.log('Termino');
};

const elementos = () => {
  console.log('Son', ok.length, 'palabras');
};

  const mostrarLetras = (palabra, funcion, intervalo = 1000) => {
    let contador = 0;
    return new Promise((resolve) => {
      let timer = setInterval(() => {
        if (palabra[contador]) {
          console.log(palabra[contador]);
          contador++;
        } else {
          clearInterval(timer);
          funcion();
          resolve();
        }
      }, intervalo);
    });
  };
  

  let ok= ["Primero", "Segundo", "Tercero"];

  mostrarLetras(ok[0] , termina)
    .then(() => mostrarLetras(ok[1], termina))
    .then(() => mostrarLetras(ok[2], elementos));

 



  
 

   







    
  







  