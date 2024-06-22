// Obtenha referências aos elementos DOM
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const mensagem = document.getElementById('mensagem');
const foto = document.getElementById('foto');
const section = document.getElementById('section');
const h1 = document.getElementById('h1');

// Dados dos signos
const signos = [
    { nome: 'Capricórnio', img: 'Capricornio.png', cor: 'Green', inicio: { mes: 12, dia: 22 }, fim: { mes: 1, dia: 19 } },
    { nome: 'Aquário', img: 'Aquario.png', cor: 'SlateGray', inicio: { mes: 1, dia: 20 }, fim: { mes: 2, dia: 18 } },
    { nome: 'Peixes', img: 'Peixes.png', cor: 'SlateBlue', inicio: { mes: 2, dia: 19 }, fim: { mes: 3, dia: 20 } },
    { nome: 'Áries', img: 'Aries.png', cor: 'DarkRed', inicio: { mes: 3, dia: 21 }, fim: { mes: 4, dia: 20 } },
    { nome: 'Touro', img: 'Touro.png', cor: 'SaddleBrown', inicio: { mes: 4, dia: 21 }, fim: { mes: 5, dia: 20 } },
    { nome: 'Gêmeos', img: 'Gemeos.png', cor: 'Crimson', inicio: { mes: 5, dia: 21 }, fim: { mes: 6, dia: 20 } },
    { nome: 'Câncer', img: 'Cancer.png', cor: 'OrangeRed', inicio: { mes: 6, dia: 21 }, fim: { mes: 7, dia: 22 } },
    { nome: 'Leão', img: 'Leao.png', cor: 'Gold', inicio: { mes: 7, dia: 23 }, fim: { mes: 8, dia: 22 } },
    { nome: 'Virgem', img: 'Virgem.png', cor: 'Fuchsia', inicio: { mes: 8, dia: 23 }, fim: { mes: 9, dia: 22 } },
    { nome: 'Libra', img: 'Libra.png', cor: 'SpringGreen', inicio: { mes: 9, dia: 23 }, fim: { mes: 10, dia: 22 } },
    { nome: 'Escorpião', img: 'Escorpiao.png', cor: 'Tomato', inicio: { mes: 10, dia: 23 }, fim: { mes: 11, dia: 21 } },
    { nome: 'Sagitário', img: 'Sargitario.png', cor: 'Orchid', inicio: { mes: 11, dia: 22 }, fim: { mes: 12, dia: 21 } }
];

// Função para verificar o signo
function verificar() {
    const diaVal = parseInt(dia.value, 10);
    const mesVal = parseInt(mes.value, 10);

    // Validação básica de entrada
    if (isNaN(diaVal) || isNaN(mesVal) || diaVal < 1 || diaVal > 31 || mesVal < 1 || mesVal > 12) {
        mensagem.innerHTML = 'Data inválida';
        return;
    }

    const signo = signos.find(({ inicio, fim }) => 
        (mesVal === inicio.mes && diaVal >= inicio.dia) || 
        (mesVal === fim.mes && diaVal <= fim.dia) || 
        (mesVal > inicio.mes && mesVal < fim.mes) ||
        (inicio.mes > fim.mes && (mesVal > inicio.mes || mesVal < fim.mes))
    );

    if (signo) {
        atualizarUI(signo);
    } else {
        mensagem.innerHTML = 'Data inválida';
    }
}

// Função para atualizar a interface do usuário
function atualizarUI(signo) {
    mensagem.innerHTML = signo.nome;
    foto.src = signo.img;
    section.style.backgroundColor = signo.cor;
    h1.style.color = signo.cor;
}
