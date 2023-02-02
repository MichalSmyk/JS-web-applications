(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // GameModel.js
  var require_GameModel = __commonJS({
    "GameModel.js"(exports, module) {
      var GameModel2 = class {
        constructor() {
          this.currentMove = null;
          this.result = null;
        }
        selectMove(move) {
          this.currentMove = move;
        }
        getRandomMove() {
          const moves = ["rock", "paper", "scissors"];
          return moves[Math.floor(Math.random() * moves.length)];
        }
        getResult() {
          const otherMove = this.getRandomMove();
          if (this.currentMove == otherMove) {
            return "tie";
          } else if (this.currentMove == "rock") {
            if (otherMove == "paper") {
              return "lose";
            } else {
              return "win";
            }
          } else if (this.currentMove == "paper") {
            if (otherMove == "rock") {
              return "win";
            } else {
              return "lose";
            }
          } else {
            if (otherMove == "paper") {
              return "win";
            } else {
              return "lose";
            }
          }
        }
      };
      module.exports = GameModel2;
    }
  });

  // GameView.js
  var require_GameView = __commonJS({
    "GameView.js"(exports, module) {
      var GameView2 = class {
        constructor(model2) {
          this.model = model2;
          this.rockButton = document.querySelector("#choose-rock");
          this.paperButton = document.querySelector("#choose-paper");
          this.scissorsButton = document.querySelector("#choose-scissors");
          this.playButton = document.querySelector("#play");
          this.rockButton.addEventListener("click", () => {
            this.model.selectMove("rock");
            const currentMove = document.querySelector("#current-move").innerText = "rock";
            console.log("Rock selected");
          });
          this.paperButton.addEventListener("click", () => {
            this.model.selectMove("paper");
            const currentMove = document.querySelector("#current-move").innerText = "paper";
            console.log("Papaer selected");
          });
          this.scissorsButton.addEventListener("click", () => {
            this.model.selectMove("scissors");
            const currentMove = document.querySelector("#current-move").innerText = "scissors";
            console.log("Scissors selected");
          });
          this.playButton.addEventListener("click", () => {
            const result = this.model.getResult();
            if (result == "win") {
              document.querySelector("#result").textContent = "You won";
            } else {
              document.querySelector("#result").textContent = "You lost";
            }
          });
        }
      };
      module.exports = GameView2;
    }
  });

  // index.js
  var GameModel = require_GameModel();
  var GameView = require_GameView();
  var model = new GameModel();
  var view = new GameView(model);
})();
