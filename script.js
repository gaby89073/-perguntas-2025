const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado: "como a inteligencia artificial poderá influenciar a criatividade humana no futuro?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A IA servirá como uma aliada da criatividade, ajudando artista, escritores, músicos e designer e explorar novas ideias, criar mais raoido e experimentar com menos limites."
            },
            {
                texto: "Não",
                afirmacao: "A presença constante da IA na criação de conteúdo pode levar á padronização da criatividade, onde estilos únicos e originais se perdem diante de produção gerados por algoritmos treinados em tendências já existentes "
            }
        ]
    },
    {
        enunciado: "Qual será o papel da inteligência artificial na educação do futuro?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A crescente dependẽncia da IA na educação pode reduzir a interação humana e o pensamento crítico, levando alunos a se tornarem excessivamente dependentes da tecnologia para aprender e resolver problemas."
            },
            {
                texto: "Não",
                afirmacao: " A IA personalizará o ensino de forma eficiente, adaptando o conteúdo ao ritmo e estilo de aprendizado de cada aluno, tornando a educação mais inclusiva e eficaz."
            }
        ]
    },
    {
        enunciado: "Como a inteligência artificial provavelmente impactará o mercado de trabalho nos próximos 10 anos?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "A IA irá automatizar muitas tarefas repetitivas e operacionais, o que pode levar á substituição de empregos e, várias áreas, espcialmente nas indústrias e serviços, exigindo que os trabalhadores se reiventem ou adquiram novas habilidades tecnológicas."
            },
            {
                texto: "Não.",
                afirmacao: "A IA será uma ferramenta poderosa de apoio aos profissionais, aumentando a produtividade, gerando novos empregos em setores emergentes e permitindo que as pessoas foquem em tarefas mais criativas, estratégicas ou humanas."
            }
        ]
    },
];

let atual = 0;  
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
