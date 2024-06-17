const ruleta = document.querySelector('#ruleta');
var i = 0;
var j = 0;

ruleta.addEventListener('click', girar);
giros = 2;
function girar(){
  if (giros < 3) {
    // let rand = Math.random() * 7200;
    let rand = (Math.random() * (3600 - 2880) + 2880) ;
    console.log("Math.random()="+Math.random());
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
  }


  function premio(premios){
    console.log(premios);
    document.querySelector('.elije').innerHTML = premios;
    setTimeout(() => {
      document.getElementById("confetti").style.display = "block";
      document.getElementById("prize").innerHTML = premios;
      document.getElementById("confetti").style.display = "block";
    }, 500);
    var audio_cheer = document.querySelector('#audio-cheer');
    audio_cheer.setAttribute('src', 'sonido/cheer.mp3');
  }

  function calcular(rand) {
    // rand = 3610; // kit
    // rand = 3670; // vaso
    // rand = 3730; // hielera
    // rand = 3790; // sonrisa
    // rand = 3850; // discuento
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    // console.log(rand);
    var rounds = rand/360;
    // console.log(rounds);
    var tics = parseInt(rounds*6);
    var itens = ['Kit de herramientas','Vaso','Hielera','Nuestra mejor sonrisa','Discuento de 10% en cambio de aceite','Parasol'] ;


    var print_item = function() {
      while (i < tics) {
        (function(i) {
          setTimeout(function() {
            if (j == 5){
              j = j-5;
            } else{
              j++;
            }
            document.querySelector('.elije').innerHTML = itens[j];
            // console.log(itens[j]);
            // console.log("tics="+tics+" - "+5000/tics);

          }, 80 * i)
        })(i++)
      }
    };
    
    print_item();
    setTimeout(() => {
      switch (true) {
        case valor > 0 && valor <= 30:
          premio("1 Kit de herramientas");
          break;
        case valor > 30 && valor <= 60:
          premio("Nada");
          break;
        case valor > 60 && valor <= 90:
          premio("1 Vaso"); 
          break; 
        case valor > 90 && valor <= 120:
          premio("Nada");
          break;
        case valor > 120 && valor <= 150:
          premio("1 Hielera");
          break; 
        case valor > 150 && valor <= 180:
          premio("Nada");
          break;
        case valor > 180 && valor <= 210:
          premio("Nuestra mejor sonrisa");
          break;
        case valor > 210 && valor <= 240:
          premio("Nada"); 
          break;
        case valor > 240 && valor <= 270:
          premio("Discuento de 10% en cambio de aceite"); 
          break;
        case valor > 270 && valor <= 300:
          premio("Nada"); 
          break;
        case valor > 300 && valor <= 330:
          premio("1 Parasol"); 
          break;
        case valor > 330 && valor <= 360:
          premio("Nada"); 
          break;
      }

    }, 5000);

  }
}