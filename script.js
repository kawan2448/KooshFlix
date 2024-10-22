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
