const userButtonGenera = document.getElementById('button-genera');
const userName = document.getElementById('name');
let userKm = document.querySelector('#userkm');
let userAge = document.getElementById('age');
console.log(userAge, typeof userAge);



userButtonGenera.addEventListener(
  'click',

  function () {
      userKm = parseInt(userKm.value);
      console.log("userKm", typeof userKm);

      const ticketPrice = 0.21;
      let price = (userKm * ticketPrice);
      document.getElementById("costo biglietto").innerHTML = price;
 
      userAge = userAge.value;

    if (userAge == "minorenne") {
         //lo sconto per i minorenni
      const discountUnder18 = 20 / 100;
      console.log(discountUnder18, typeof discountUnder18);
    
         //il prezzo scontato
         const discountAmountUnder18 = (price - (price * discountUnder18.toFixed(2)));
         document.getElementById("costo biglietto").innerHTML = discountAmountUnder18;
    } else if (userAge == "over") {
      //lo sconto per gli over 65
      const discountOver65 = 40 / 100;
    
      //il prezzo scontato
      const discountAmountOver65 = (price - (price * discountOver65.toFixed(2)));
      document.getElementById("costo biglietto").innerHTML = discountAmountOver65;
    } 
    document.getElementById("user name").innerHTML = userName.value;
    
    let carrozza = Math.floor(Math.random () * 20);
    document.getElementById("carrozza").innerHTML = carrozza;

    let codiceCp = Math.floor(Math.random () * 100000) + 1;
    document.getElementById("codice-cp").innerHTML = codiceCp;

    let offerta ="nulla";
    document.getElementById("offerta").innerHTML = (offerta);

    let discount = "prezzo pieno";
    document.getElementById("sconto").innerHTML = discount; 
    }
    
)






// if (isNaN(userKm) == true) {
      //     alert("I valori inseriti non sono validi. Aggiornala pagina e riprova");
      //   }