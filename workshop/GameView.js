class GameView {
    constructor(model) {
        this.model = model;

        this.rockButton = document.querySelector('#choose-rock');
        this.paperButton = document.querySelector('#choose-paper');
        this.scissorsButton = document.querySelector('#choose-scissors');

        this.playButton = document.querySelector('#play')

        this.rockButton.addEventListener('click', () => {
            this.model.selectMove('rock');
            
            const currentMove = document.querySelector('#current-move').innerText = 'rock';
            
            console.log('Rock selected');
        });

        this.paperButton.addEventListener('click', () => {
            this.model.selectMove('paper');

            const currentMove = document.querySelector('#current-move').innerText = 'paper';
            
            console.log('Papaer selected');
        });

        this.scissorsButton.addEventListener('click', () => {
            this.model.selectMove('scissors');

            const currentMove = document.querySelector('#current-move').innerText = 'scissors';
            
            console.log('Scissors selected');
        });

        this.playButton.addEventListener('click', () => {
            const result = this.model.getResult();

            if (result == 'win'){ 
                document.querySelector('#result').textContent = 'You won'
            } else {
                document.querySelector('#result').textContent = 'You lost'
            }
        })
    }
}

module.exports = GameView;