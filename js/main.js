const userButtonGenera = document.getElementById("button-genera");

let userAge = document.getElementById("age");

let userKm = document.getElementById("userkm");
console.log(userKm);
 
userButtonGenera.addEventListener(
  'click',

  function () {
    userKm = parseInt(userKm.value);
   
    if (!isNaN(userKm)) {
      const pricePerKm = 0.21;
      let price = userKm * pricePerKm.toFixed(2);

      if (userAge == "minorenne") {
        //lo sconto per i minorenni
        const discountUnder18 = 20 / 100;
    
        //il prezzo scontato
        const discountAmountUnder18 = price * discountUnder18;
        price = price - discountAmountUnder18.toFixed(2);
        console.log(price);
      } else if (userAge == "over65") {
        //lo sconto per gli over 65
        const discountOver65 = 40 / 100;
    
        //il prezzo scontato
        const discountAmountOver65 = price * discountOver65;
        price = price - discountAmountOver65.toFixed(2);
      }
    } else { 
      alert("I valori inseriti non sono validi. Aggiornala pagina e riprova");
    }
  }      
);
