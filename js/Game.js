class Game{
    contructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
    })}
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(24);
        text("Get Ready!", 200,100);
        Player.getPlayerInfo();

        if(allPlayers!== undefined){
            var displayPosition = 130;
            for(var plr in allPlayers){
                if(plr === "player" + player.Index)
                fill("red");
                else
                fill("orange");

                displayPosition += 20;
                textSize(24);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 300,displayPosition);

            }
        }
        if(keyIsDown(UP_ARROW)&& player.Index !== null){
            player.distance += 50;
            player.update();
        }
    }
}