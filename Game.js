class Game {
    constructor () {

    }
    // function getGameState .. reads the gameState from DB
    getGameState () {
        //refer to gameState location in DB
            var gameStateRef = database.ref ("/gameState");
            // listen to gameState changes in DB
            gameStateRef.on ("value", 
                            function(data){
                                gameState = data.val ();
                                console.log ("GAME STATE : "+ gameState);
                            }
            )
    }
// function updateGameState .. updates gameState in the DB
updateGameState (state) {
    var gameStateRef = database.ref ("/gameState");
    gameStateRef.set ({"gameState" : state}) ;
}

// function start
start () {
    if (gameState == 0) {
        player = new Player ();
        var startCount = player.getPlayerCount ();
        console.log ("START :"+startCount);
        form = new Form () ;
        form.display () ;
    }
}    

play () {
    form.hide ();
    textSize (30) ;
    text ("Game Start", 120,100);
    Player.getPlayerInfo ();

    if (allPlayers != undefined) {
        var display_position = 130;
        for (var plr in allPlayers){
            if (plr == "player"+player.index)
                fill("green");
            else 
                fill("blue");
            textSize (15) ;
            text (allPlayers[plr].name+": " + allPlayers[plr].distance, 120, display_position);
        }
        
    }
    console.log (player.index);
    if (keyIsDown (UP_ARROW) && player.index != null) {
        console.log ("UPARROW PRESSED");
        player.distance+=50;
        player.updatePlayerNameAndDistance ();

    }
}


}