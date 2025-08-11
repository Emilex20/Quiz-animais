const fases = [
    {
        nome: "Fase 1",
        perguntas: [
            { pergunta: "Qual desses animais é o único mamífero capaz de voar?", opcoes: ["Morcego", "Pato", "Águia", "Pinguim"], resposta: 0 },
            { pergunta: "Qual animal abaixo é venenoso e pode ser encontrado no mar?", opcoes: ["Água-viva", "Golfinho", "Tubarão", "Baleia"], resposta: 0 },
            { pergunta: "Qual desses animais utiliza ecolocalização para se orientar?", opcoes: ["Golfinho", "Cavalo", "Gato", "Leão"], resposta: 0 },
            { pergunta: "Qual animal é conhecido por construir diques e represas?", opcoes: ["Castor", "Lontra", "Sapo", "Pato"], resposta: 0 },
            { pergunta: "Qual desses animais é um marsupial típico da Austrália?", opcoes: ["Canguru", "Urso", "Raposa", "Lobo"], resposta: 0 },
            { pergunta: "Qual animal é considerado o maior réptil do mundo?", opcoes: ["Crocodilo", "Tartaruga", "Cobra", "Lagarto"], resposta: 0 },
            { pergunta: "Qual desses animais é capaz de regenerar partes do corpo?", opcoes: ["Estrela-do-mar", "Polvo", "Camarão", "Caranguejo"], resposta: 0 },
            { pergunta: "Qual animal é conhecido por sua longa migração anual?", opcoes: ["Andorinha", "Galinha", "Pato", "Papagaio"], resposta: 0 },
            { pergunta: "Qual desses animais é o maior mamífero terrestre?", opcoes: ["Elefante", "Hipopótamo", "Rinoceronte", "Girafa"], resposta: 0 },
            { pergunta: "Qual animal é famoso por sua habilidade de mudar de cor para se camuflar?", opcoes: ["Camaleão", "Cobra", "Sapo", "Lagarto"], resposta: 0 }
        ]
    },
    {
        nome: "Fase 2",
        perguntas: [
            { pergunta: "Qual desses animais é o mais rápido em terra?", opcoes: ["Guepardo", "Leão", "Cavalo", "Lobo"], resposta: 0 },
            { pergunta: "Qual animal é conhecido por sua inteligência e uso de ferramentas?", opcoes: ["Golfinho", "Cavalo", "Gato", "Papagaio"], resposta: 0 },
            { pergunta: "Qual desses animais é um monotremado (mamífero que põe ovos)?", opcoes: ["Ornitorrinco", "Canguru", "Coala", "Tigre"], resposta: 0 },
            { pergunta: "Qual animal é símbolo do WWF?", opcoes: ["Panda", "Leão", "Girafa", "Cavalo"], resposta: 0 },
            { pergunta: "Qual desses animais é conhecido por sua carapaça espinhosa?", opcoes: ["Ouriço", "Tartaruga", "Cobra", "Sapo"], resposta: 0 },
            { pergunta: "Qual animal é famoso por sua habilidade de voar para trás?", opcoes: ["Beija-flor", "Águia", "Pato", "Coruja"], resposta: 0 },
            { pergunta: "Qual desses animais é considerado o maior peixe do mundo?", opcoes: ["Tubarão-baleia", "Baleia Azul", "Tubarão Branco", "Golfinho"], resposta: 0 },
            { pergunta: "Qual animal é famoso por sua tromba longa e presa de marfim?", opcoes: ["Elefante", "Hipopótamo", "Rinoceronte", "Girafa"], resposta: 0 },
            { pergunta: "Qual desses animais é conhecido por construir teias?", opcoes: ["Aranha", "Formiga", "Abelha", "Borboleta"], resposta: 0 },
            { pergunta: "Qual animal é famoso por sua capacidade de imitar sons humanos?", opcoes: ["Papagaio", "Gato", "Cachorro", "Leão"], resposta: 0 }
        ]
    },
    {
        nome: "Fase 3",
        perguntas: [
            { pergunta: "Qual desses animais é o maior animal do planeta?", opcoes: ["Baleia Azul", "Elefante", "Tubarão", "Girafa"], resposta: 0 },
            { pergunta: "Qual animal é conhecido por sua simbiose com o peixe-palhaço?", opcoes: ["Anêmona-do-mar", "Coral", "Estrela-do-mar", "Polvo"], resposta: 0 },
            { pergunta: "Qual desses animais é considerado o mais venenoso do mundo?", opcoes: ["Rã-dourada", "Cobra-coral", "Aranha-armadeira", "Escorpião"], resposta: 0 },
            { pergunta: "Qual animal é famoso por sua longa hibernação?", opcoes: ["Urso", "Lobo", "Raposa", "Coelho"], resposta: 0 },
            { pergunta: "Qual desses animais é conhecido por sua metamorfose completa?", opcoes: ["Borboleta", "Abelha", "Formiga", "Besouro"], resposta: 0 },
            { pergunta: "Qual animal é famoso por sua capacidade de regenerar membros?", opcoes: ["Salamandra", "Lagarto", "Cobra", "Sapo"], resposta: 0 },
            { pergunta: "Qual desses animais é o maior felino do mundo?", opcoes: ["Tigre", "Leão", "Leopardo", "Guepardo"], resposta: 0 },
            { pergunta: "Qual animal é conhecido por sua carapaça dura e vida longa?", opcoes: ["Tartaruga", "Cavalo", "Gato", "Cachorro"], resposta: 0 },
            { pergunta: "Qual desses animais é símbolo da paz?", opcoes: ["Pomba", "Águia", "Coruja", "Papagaio"], resposta: 0 },
            { pergunta: "Qual animal é famoso por sua preguiça?", opcoes: ["Bicho-preguiça", "Macaco", "Cavalo", "Cachorro"], resposta: 0 }
        ]
    }
];

let faseAtual = 0;
let perguntaAtual = 0;
let pontuacao = 0;
let acertosNaFase = 0;

const telaInicial = document.getElementById('tela-inicial');
const btnIniciar = document.getElementById('btn-iniciar');
const quizContainer = document.getElementById('quiz-container');
const faseInfo = document.getElementById('fase-info');
const perguntaDiv = document.getElementById('pergunta');
const opcoesDiv = document.getElementById('opcoes');
const proximaBtn = document.getElementById('proxima');
const resultadoDiv = document.getElementById('resultado');

btnIniciar.onclick = () => {
    faseAtual = 0;
    perguntaAtual = 0;
    pontuacao = 0;
    acertosNaFase = 0;
    telaInicial.style.display = 'none';
    quizContainer.style.display = 'block';
    mostrarPergunta();
};

function mostrarPergunta() {
    const fase = fases[faseAtual];
    const perguntaObj = fase.perguntas[perguntaAtual];
    faseInfo.textContent = `${fase.nome} - Pergunta ${perguntaAtual + 1} de 10 | Pontuação: ${pontuacao}`;
    perguntaDiv.innerHTML = `<span>${perguntaObj.pergunta}</span>`;
    opcoesDiv.innerHTML = '';
    resultadoDiv.textContent = '';
    proximaBtn.style.display = 'none';
    perguntaObj.opcoes.forEach((opcao, i) => {
        const btn = document.createElement('button');
        btn.textContent = opcao;
        btn.onclick = () => selecionarOpcao(i);
        opcoesDiv.appendChild(btn);
    });
}

function selecionarOpcao(indice) {
    const fase = fases[faseAtual];
    const perguntaObj = fase.perguntas[perguntaAtual];
    const botoes = opcoesDiv.querySelectorAll('button');
    botoes.forEach((btn, i) => {
        btn.disabled = true;
        if (i === perguntaObj.resposta) {
            btn.classList.add('correta');
        }
        if (i === indice && i !== perguntaObj.resposta) {
            btn.classList.add('errada');
        }
    });
    if (indice === perguntaObj.resposta) {
        resultadoDiv.innerHTML = '<span class="correta">✔️ Correto!</span>';
        pontuacao++;
        acertosNaFase++;
    } else {
        resultadoDiv.innerHTML = `<span class="errada">❌ Errado!</span> Resposta correta: <span class='correta'>${perguntaObj.opcoes[perguntaObj.resposta]}</span>`;
        pontuacao--;
    }
    proximaBtn.style.display = 'inline-block';
    faseInfo.textContent = `${fase.nome} - Pergunta ${perguntaAtual + 1} de 10 | Pontuação: ${pontuacao}`;
}

proximaBtn.onclick = () => {
    perguntaAtual++;
    if (perguntaAtual >= 10) {
        // Bônus se acertar todas as perguntas da fase
        if (acertosNaFase === 10) {
            pontuacao += 5;
        }
        faseAtual++;
        perguntaAtual = 0;
        acertosNaFase = 0;
        if (faseAtual >= fases.length) {
            mostrarResultadoFinal();
            return;
        }
    }
    mostrarPergunta();
};

function mostrarResultadoFinal() {
    faseInfo.textContent = '';
    perguntaDiv.textContent = '';
    opcoesDiv.innerHTML = '';
    proximaBtn.style.display = 'none';
    let mensagem = '';
    if (pontuacao === 30) {
        mensagem = `<span style='color:#28A745;font-size:1.3em;font-weight:bold;'>Parabéns! Você acertou tudo! 🏆</span><br>`;
    } else if (pontuacao >= 20) {
        mensagem = `<span style='color:#007BFF;font-size:1.2em;font-weight:bold;'>Ótimo desempenho! 🦁</span><br>`;
    } else if (pontuacao >= 10) {
        mensagem = `<span style='color:#FFC107;font-size:1.1em;font-weight:bold;'>Bom esforço! 🐾</span><br>`;
    } else {
        mensagem = `<span style='color:#DC3545;font-size:1.1em;font-weight:bold;'>Continue praticando! 🐢</span><br>`;
    }
    resultadoDiv.innerHTML = `
        <div style="padding:20px 0;">
            <h2 style='color:#333;font-family:"Baloo 2",cursive;'>Quiz finalizado!</h2>
            ${mensagem}
            <div style='font-size:1.1em;color:#444;'>Sua pontuação final: <b>${pontuacao}</b> de 30</div>
            <div style='margin:18px 0;font-size:1.5em;'>🎉✨</div>
            <button onclick='reiniciarQuiz()' style='background:#007BFF;color:#fff;border:none;border-radius:30px;padding:12px 32px;font-size:1em;cursor:pointer;font-family:"Nunito",sans-serif;font-weight:700;'>Jogar Novamente</button>
        </div>
    `;
}

window.reiniciarQuiz = function() {
    telaInicial.style.display = 'block';
    quizContainer.style.display = 'none';
    resultadoDiv.innerHTML = '';
};
