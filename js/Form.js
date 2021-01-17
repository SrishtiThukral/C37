class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h2");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        // var input = createInput("name");
        // var button = createButton("play");
        // var greeting = createElement("h3");

        this.input.position(130,160);
        this.button.position(250,200);
        
        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.Index = playerCount;
            player.update()
            player.updateCount(playerCount);

            this.greeting.html("Welcome: " + player.name);
            this.greeting.position(130,50);

            
        })

    }


}