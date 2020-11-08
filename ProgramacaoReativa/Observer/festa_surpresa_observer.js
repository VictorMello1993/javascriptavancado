const readline = require("readline");
const fn = require("../../Projeto1/funcoes");

//------------------------------------------------------TESTE OBSERVER-----------------------------------------------------------------------------------------------      
function getAnswer(ask) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(ask, (answ) => {
      resolve(answ);
      rl.close();
    });
  });
}

// getAnswer('Esse é um teste? ')
//     .then(console.log)
//------------------------------------------------------------------------------------------------------------------------------------------------------      


//---------------------------------------Funções observers---------------------------------------------------------------------------------------------------------
function morador() {
  console.log("N: Apagar as luzes");
  console.log("N: Pedir silêncio");
  console.log("N: Surpresa!!!!");
}

function sindico(event) {
  console.log("S: Monitorando o barulho");
  console.log(`S: evento -> ${event.resp}`)  
  console.log(`S: evento -> ${event.data}`)
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  


// function porteiro(observers){
//     (observers || []).forEach(obs => obs())
// }

//-----------------------------------------------Implementando um Observer básico----------------------------------------------------------------------------------------------------------------------------------------------------------
/*s => sim, e será disparado o evento
  N => não (resposta padrão) quando usuário digita qualquer coisa
  q => quit (sair do programa)*/

//Subject
async function porteiro(observers) {
  while (true) {
    const resp = await getAnswer("O morador chegou? (s/N/q)");
    if (resp.toLowerCase() === "s") {
      (observers || []).forEach(obs => obs({resp, data: fn.getDateNow()})); //Os observers são notificados
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

porteiro([morador, sindico]);

//Componentes do padrão observer:
/*Subject: é alguém que registra dois observers (no caso, é o porteiro) e é responsável pelo monitoramento dos eventos e notifica os
           observadores quando o evento ocorrer*/
//Observers: morador e síndico
