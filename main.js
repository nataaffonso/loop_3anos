
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("que foi ganha a copa do mudo da frança 1998");

    
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

  
