function qs (element){
    return document.querySelector(element)
    }
    
    let $main = qs('main')
    let $h2 = qs('.subtitulo')
    let $a = qs('a')
    let $p = document.querySelectorAll('p')
    let $body = qs('body')
    
    let userName = prompt('ingrese su nombre') || 'invitado';
    $h2.innerText +=` ${userName}`;
    
    $main.style.display = "block";
    
    $h2.style.textTransform = 'uppercase';
    $a.style.color = '#E51B3E';
    let background = confirm('¿desea colocar un fondo de patanlla?')
    background && $body.classList.add('fondo');//element.classList.remove('fondo')
    
    for(let i = 0; i <$p.length;i++){
    
    if((i + 1 ) % 2 == 0){
    $p[i].classList.add('destacadoPar')
    }else{
    $p[i].classList.add('destacadoImpar')
    
    }
    
    }
    let $inputTitle = document.querySelector('#titulo');
    let estadoSecreto = 0;
    
    $inputTitle.addEventListener('keydown', (event) => {
        switch (true) {
            case event.key == "s" && estadoSecreto == 0:
                estadoSecreto = 1;
                break;
            case event.key == "e" && estadoSecreto == 1:
                estadoSecreto = 2;
                break;
            case event.key == "c" && estadoSecreto == 2:
                estadoSecreto = 3;
                break;
            case event.key == "r" && estadoSecreto == 3:
                estadoSecreto = 4;
                break;
            case event.key == "e" && estadoSecreto == 4:
                estadoSecreto = 5;
                break;
            case event.key == "t" && estadoSecreto == 5:
                estadoSecreto = 6;
                break;
            case event.key == "o" && estadoSecreto == 6:
                estadoSecreto = 0;
                alert("SECRETO MÁGICO")
                break;
default: 
                estadoSecreto = 0;
        }
    })
