// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

// ARRAY CON LISTA SPESA
const listaSpesa = [
  'latte',
  'uova',
  'pane',
  'pasta'
];

// console.log(listaSpesa);

// LOOP FOR CON STAMPA SINGOLI ITEMS
// for (let i = 0; i < listaSpesa.length; i++){
//   console.log(listaSpesa[i]);
// }

// VARIABILE DEL CONTAINER
let contenitore = document.querySelector('.container');

// LOOP WHILE 
i = 0;
while(i < listaSpesa.length){
  // console.log(listaSpesa[i]);
  
  // AGGIUNGI DIV CON INPUT CHECKBOX PER OGNI ELEMENTO DELLA LISTA
  contenitore.innerHTML+=
    `<div>
      <input type="checkbox" name="lista"   id="list-items">
      ${listaSpesa[i]}
      </input>
    </div>`
    
    i++;
  }
  
// CLICK (BONUS)
let add = document.getElementById('btn');

add.addEventListener("click", 
  function(){
    // VARIABILE DELL'INPUT TEXT
    let inputTesto = document.getElementById('aggiungi');
    // PUSH NUOVO VALORE NELL'ARRAY
    listaSpesa.push(inputTesto.value);
    // RESET TESTO
    inputTesto.value = '';

    console.log(listaSpesa);   
  }
);