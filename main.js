
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("COPA DO MUNDO 2022");

    
    if (respostaTime.toLowerCase() === "Corinthians pr") {
      alert("Isso mesmo! O CORINTHIANS é o melhor time!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
