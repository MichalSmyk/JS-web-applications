class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    


    console.log(this.mainContainerEl);
   
  }

  addParagraph(){
    const p = document.createElement("p");
    p.innerText = "This paragraph has been dynamically added by JavaScript!";
    this.mainContainerEl.append(p);
  }
}

module.exports = View;