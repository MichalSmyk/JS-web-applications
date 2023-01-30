class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const messageEl = document.createElement('div');
    messageEl.id = 'message';
    messageEl.innerText = 'This message displayed by JavaScript';

    document.querySelector('#main-container').append(messageEl);
  }

  hideMessage(){
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;