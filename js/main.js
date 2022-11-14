// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

// ARRAY CON LISTA SPESA
const listaSpesa = [
  'latte',
  'uova',
  'pane',
  'pasta'
];

console.log(listaSpesa);

// LOOP FOR CON STAMPA SINGOLI ITEMS
// for (let i = 0; i < listaSpesa.length; i++){
//   console.log(listaSpesa[i]);
// }

// LOOP WHILE 
i = 0;
while(i < listaSpesa.length){
  console.log(listaSpesa[i]);
  i++;
}

