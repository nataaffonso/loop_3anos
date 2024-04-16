
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("copa.do mundo");

    
    if (respostaTime.toLowerCase() === "Corinthians pr") {
      alert("Isso mesmo! O Corinthians PR é o melhor time!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
