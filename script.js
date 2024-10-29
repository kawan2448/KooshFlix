




function submitQuiz() {
    let score = 0;
    const totalQuestions = 3; // Total de perguntas no quiz
    
    // Pergunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "1") {
        score++;
    }

    // Pergunta 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "1") {
        score++;
    }

    // Pergunta 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "1") {
        score++;
    }

    // Exibir o resultado
    const result = document.getElementById('result');
    if (score === totalQuestions) {
        result.innerHTML = `Parabéns! Você acertou todas as ${totalQuestions} perguntas!`;
        result.style.color = "green";
    } else {
        result.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas. Tente novamente!`;
        result.style.color = "red";
    }
}





document.getElementById('form-depoimento').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    const depoimentoItem = document.createElement('li');
    depoimentoItem.textContent = `${nome}: ${comentario}`;
    
    document.getElementById('lista-depoimentos').appendChild(depoimentoItem);

    // Limpa os campos do formulário
    document.getElementById('form-depoimento').reset();
});



document.getElementById('form-quiz').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    const resposta = document.querySelector('input[name="filme"]:checked');
    
    if (resposta) {
        document.getElementById('resultado').innerText = `Você escolheu: ${resposta.value}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, escolha um filme!';
    }
});



document.getElementById('form-membro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você poderia enviar os dados para um servidor

    document.getElementById('mensagem').innerText = `Bem-vindo(a), ${nome}! Sua inscrição foi realizada com sucesso.`;
    
    // Limpar o formulário
    this.reset();
});


// Adicione esta linha ao final da função de inscrição
document.getElementById('conteudo-exclusivo').style.display = 'block';
