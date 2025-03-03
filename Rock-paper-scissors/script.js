const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const escolha = document.getElementById("escolha");
const enviar = document.getElementById("jogar");
var playerChoosen = ""
var playerPointElement = document.getElementById('playerPoints');
var pcPointElement = document.getElementById('pcPoints');
var _playerPoint = 0;
var _pcPoint = 0;



function animar(botao) {
    botao.style.transform = "scale(1.1)"; 

    setTimeout(() => {
        botao.style.transform = "scale(1)"; 
    }, 200); 
}

paper.addEventListener("click", () => {
    escolha.textContent = "Você escolheu: Papel 🤚";
    animar(paper); 
    playerChoosen = 'Papel'
});

rock.addEventListener("click", () => {
    escolha.textContent = "Você escolheu: Pedra 👊";
    animar(rock);
    playerChoosen = 'Pedra'
});

scissors.addEventListener("click", () => {
    escolha.textContent = "Você escolheu: Tesoura ✌";
    animar(scissors);
    playerChoosen = 'Tesoura'
});    
enviar.addEventListener("click", () => {
    if (escolha.textContent != ""){
        var IA = Math.floor(Math.random() * 3) + 1;
        if (IA == 1){
            window.alert(`Escolhi Papel e você ${playerChoosen}`)
            if(playerChoosen == 'Papel'){
                window.alert('Empate!')
            }else if (playerChoosen == 'Pedra'){
                window.alert('Eu ganhei!')
                _pcPoint++
                pcPointElement.textContent = _pcPoint
            }else{
                window.alert('Você Ganhou')
                _playerPoint++
                playerPointElement.textContent = _playerPoint
            }
        }else if (IA == 2){
            window.alert(`Escolhi Pedra você ${playerChoosen}`)
            if(playerChoosen == 'Pedra'){
                window.alert('Empate!')
            }else if (playerChoosen == 'Tesoura'){
                window.alert('Eu ganhei!')
                _pcPoint++
                pcPointElement.textContent = _pcPoint
            }else{
                window.alert('Você Ganhou')
                _playerPoint++
                playerPointElement.textContent = _playerPoint
            }
        }else{
            window.alert(`Escolhi Tesoura você ${playerChoosen}`)
            if(playerChoosen == 'Tesoura'){
                window.alert('Empate!')
            }else if (playerChoosen == 'Papel'){
                window.alert('Eu ganhei!')
                _pcPoint++
                pcPointElement.textContent = _pcPoint
            }else{
                window.alert('Você Ganhou')
                _playerPoint++
                playerPointElement.textContent = _playerPoint
            }
        }
    }else{
        window.alert("Escolha um antes de jogar")
    }
});

