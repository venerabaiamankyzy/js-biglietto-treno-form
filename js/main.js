const userButtonGenera = document.getElementById("button-genera");

 
userButtonGenera.addEventListener(
  'click',

  function () {
    // userKm = parseInt(userKm.value);
    let userAge = document.getElementById("age").value;
    console.log("userAge", userAge, typeof userAge)
    let userKm = document.getElementById("userkm").value;
    console.log("userKm", userKm, typeof userKm);

    userKm = parseInt(userKm.value);

    if (!isNaN(userKm)) {
      const pricePerKm = 2;
      let price = userKm * pricePerKm.toFixed(2);
      document.getElementById("costo biglietto").innerHTML = price;
      console.log(price);

      let carrozza = Math.floor(Math.random () * 20);
      document.getElementById("carrozza").innerHTML = carrozza;

      let codiceCp = Math.floor(Math.random () * 100000) + 1;
      document.getElementById("codice-cp").innerHTML = codiceCp;

      let offerta ="nulla";
      document.getElementById("offerta").innerHTML = (offerta);
  
      if (userAge == "minorenne") {
        //lo sconto per i minorenni
        const discountUnder18 = 20 / 100;
    
        //il prezzo scontato
        const discountAmountUnder18 = (price - (price * discountUnder18.toFixed(2)));
        document.getElementById("costo biglietto").innerHTML = discountAmountUnder18;
      
      } else if (userAge == "over65") {
        //lo sconto per gli over 65
        const discountOver65 = 40 / 100;
    
        //il prezzo scontato
        const discountAmountOver65 = (price - (price * discountOver65.toFixed(2)));
        document.getElementById("costo biglietto").innerHTML = discountAmountOver65;
      }
    } else { 
      alert("I valori inseriti non sono validi. Aggiornala pagina e riprova");
    }
  }      
);
