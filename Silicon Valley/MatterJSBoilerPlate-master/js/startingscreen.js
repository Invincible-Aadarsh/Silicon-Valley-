class StartingScreen{
    constructor(){
        this.input = createInput("Name")
       this.button = createButton("Play")
        this.greeting = createElement('h3')
        this.title = createElement('h3')
        this.waiting = createElement('h3')
    }
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
    this.title.hide()

}

display(){
    //Title
    this.title.html('Road Rash')
    this.title.position(displayWidth/2 - 50,0)
    //position
    this.input.position(displayWidth/2 - 90, displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 30 , displayHeight/2);
    //Hiding
    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide()
    //Player Name 
    //Counting of Players so the game could start
    //Hello and Waiting screen after entering the name 
    contestant.name = this.input.value();
    Count+=1
    contestant.index = Count;
    contestant.update();
    contestant.updateCount(Count)
    this.greeting.html('Hello' + contestant.name)
    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    this.waiting.html('Waiting For Players To Enter')
    this.waiting.position(displayWidth/2 - 70, displayHeight/6);
    });
}
    }
