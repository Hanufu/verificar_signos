    var dia = window.document.getElementById('dia');
    var mes = window.document.getElementById('mes');
    var mensagem = window.document.getElementById('mensagem');
    var imagem = window.document.getElementById('imagem');
    var foto = window.document.getElementById('foto');
    var section = window.document.getElementById('section')
    var h1 = window.document.getElementById('h1')
    

function verificar(){
    

    if(mes.value == 01 || mes.value == 1){
        if(dia.value <= 19){
            mensagem.innerHTML = 'Capricórnio';
            foto.src = "Capricornio.png"
            //---------------------------------------------//
                section.style.backgroundColor = 'Green'
                h1.style.color = 'Green'
            //---------------------------------------------//

        }else if(dia.value >19){
            mensagem.innerHTML = 'Aquário'
            foto.src = "Aquario.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SlateGray'
            h1.style.color = 'SlateGray'
        //---------------------------------------------//
        }
    }else if(mes.value == 02 || mes.value == 2){
        if(dia.value <= 18){
            mensagem.innerHTML = 'Aquário'
            foto.src = "Aquario.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SlateGray'
            h1.style.color = 'SlateGray'
        //---------------------------------------------//
        }else if(dia.value > 18){
            mensagem.innerHTML = 'Peixes'
            foto.src = "Peixes.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SlateBlue'
            h1.style.color = 'SlateBlue'
        //---------------------------------------------//
        }
    }else if(mes.value == 03 || mes.value == 3){
        if(dia.value <=20){
            mensagem.innerHTML = 'Peixes'
            foto.src = "Peixes.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SlateBlue'
            h1.style.color = 'SlateBlue'
        //---------------------------------------------//
        }else if(dia.value > 20){
            mensagem.innerHTML = 'Áries'
            foto.src = "Aries.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'DarkRed'
            h1.style.color = 'DarkRed'
        //---------------------------------------------//
        }
    }else if(mes.value == 04 || mes.value == 4){
        if(dia.value <= 21){
            mensagem.innerHTML = 'Áries'
            foto.src = "Aries.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'DarkRed'
            h1.style.color = 'DarkRed'
        //---------------------------------------------//
        }else if(dia.value > 21){
            mensagem.innerHTML = 'Touro'
            foto.src = "Touro.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SaddleBrown'
            h1.style.color = 'SaddleBrown'
        //---------------------------------------------//
        }
    }else if(mes.value == 05 || mes.value == 5){
        if(dia.value <= 20){
            mensagem.innerHTML = 'Touro'
            foto.src = "Touro.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SaddleBrown'
            h1.style.color = 'SaddleBrown'
        //---------------------------------------------//
        }else if(dia.value > 20){
            mensagem.innerHTML = 'Gêmeos'
            foto.src = "Gemeos.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Crimson'
            h1.style.color = 'Crimson'
        //---------------------------------------------//
        }
    }else if(mes.value == 06 || mes.value == 6){
        if(dia.value <= 21){
            mensagem.innerHTML = 'Gêmeos'
            foto.src = "Gemeos.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Crimson'
            h1.style.color = 'Crimson'
        //---------------------------------------------//
        }else if(dia.value >21){
            mensagem.innerHTML = 'Câncer'
            foto.src = "Cancer.png"
            //---------------------------------------------//
            section.style.backgroundColor = ''
            h1.style.color = ''
        //---------------------------------------------//
        }
    }else if(mes.value == 07 || mes.value == 7){
        if(dia.value <= 22){
            mensagem.innerHTML = 'Câncer'
            foto.src = "Cancer.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'OrangeRed'
            h1.style.color = 'OrangeRed'
        //---------------------------------------------//
        }else if(dia.value >22){
            mensagem.innerHTML = 'Leão'
            foto.src = "Leao.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Gold'
            h1.style.color = 'Gold'
        //---------------------------------------------//
        }
    }else if(mes.value == 08 || mes.value == 8){
        if(dia.value <= 23){
            mensagem.innerHTML = 'Leão'
            foto.src = "Leao.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Gold'
            h1.style.color = 'Gold'
        //---------------------------------------------//
        }else if(dia.value >23){
            mensagem.innerHTML = 'Virgem'
            foto.src = "Virgem.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Fuchsia'
            h1.style.color = 'Fuchsia'
        //---------------------------------------------//
        }
    }else if(mes.value == 09 || mes.value == 9){
        if(dia.value <= 23){
            mensagem.innerHTML = 'Virgem'
            foto.src = "Virgem.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Fuchsia'
            h1.style.color = 'Fuchsia'
        //---------------------------------------------//
        }else if(dia.value >23){
            mensagem.innerHTML = 'Libra'
            foto.src = "Libra.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SpringGreen'
            h1.style.color = 'SpringGreen'
        //---------------------------------------------//
        }
    }else if(mes.value == 10 || mes.value == 10){
        if(dia.value <= 23){
            mensagem.innerHTML = 'Libra'
            foto.src = "Libra.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'SpringGreen'
            h1.style.color = 'SpringGreen'
        //---------------------------------------------//
        }else if(dia.value >23){
            mensagem.innerHTML = 'Escorpião'
            foto.src = "Escorpiao.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Tomato'
            h1.style.color = 'Tomato'
        //---------------------------------------------//
        }
    }else if(mes.value == 11 || mes.value == 11){
        if(dia.value <= 23){
            mensagem.innerHTML = 'Escorpião'
            foto.src = "Escorpiao.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Tomato'
            h1.style.color = 'Tomato'
        //---------------------------------------------//
        }else if(dia.value >23){
            mensagem.innerHTML = 'Sargitátio'
            foto.src = "Sargitario.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Orchid'
            h1.style.color = 'Orchid'
        //---------------------------------------------//
        }
    }else if(mes.value == 12 || mes.value == 12){
        if(dia.value <= 22){
            mensagem.innerHTML = 'Sargitário'
            foto.src = "Sargitario.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Orchid'
            h1.style.color = 'Orchid'
        //---------------------------------------------//
        }else if(dia.value >22){
            mensagem.innerHTML = 'Capricórnio'
            foto.src = "Capricornio.png"
            //---------------------------------------------//
            section.style.backgroundColor = 'Green'
            h1.style.color = 'Green'
        //---------------------------------------------//
        }
        
    }
}