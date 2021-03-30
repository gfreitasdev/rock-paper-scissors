const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Começa o jogo
    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        })
    }

    // Jogar partida
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img')
        
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = ''
            })
        })

        // Opções da Máquina
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                //Escolha do Computador
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]

            setTimeout(() =>{
                   // Comparar mãos
                   compareHands(this.textContent, computerChoice)

                   //Atualizar Imagens
                   playerHand.src = `./assets/${this.textContent}.png`;
                   computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000)

                //Animações
                playerHand.style.animation = 'shakePlayer 2s ease'
                computerHand.style.animation = 'shakeComputer 2s ease'

            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoice) =>{
         const winner = document.querySelector('.winner')
         if(playerChoice === computerChoice){
             winner.textContent = 'It is a tie';
             return;
         }
         if(playerChoice === 'rock'){
             if(computerChoice === 'scissors'){
                 winner.textContent = 'You win!'
                 pScore++;
                 updateScore()
                 return;
             }else{
                 winner.textContent = 'You Lose! :(';
                 cScore++
                 updateScore()
                 return;
             }
         }

         if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You Lose! :('
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'You win!';
                pScore++
                updateScore()
                return;
            }
        }
        
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'You Lose! :('
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'You win!';
                pScore++
                updateScore()
                return;
            }
        }
    }

    //iniciar todas as funções
    startGame()
    playMatch()
}

//iniciar a função de jogo
game();