class Main{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }

      update(state){
        database.ref('/').update({
            gameState: state
          });
      }

      async start(){
         if(gameState === 0) {
            contestant = new Contestant();
            var countuse = await database.ref('ContestantCount').once("value");
            if(countuse.exists()){
              Count = countuse.val();
              contestant.getCount();
            }
            SS = new StartingScreen();
      }

     B1 = createSprite(100,200);
     B1.addImage(B1I);
     B2 = createSprite(300,200);
     B2.addImage(B2I);
     B3 = createSprite(500,200);
     B3.addImage(B3I);
     B4 = createSprite(700,200);
     B4.addImage(B4I);

    
}

play(){
  SS.hide();
  
  Contestant.getPlayerInfo();
  contestant.getCarsAtEnd();     
  if(AllC !== undefined){
    background(rgb(198,135,103));
    image(viewI,0,-displayHeight*4,displayWidth, displayHeight*5);
    
    //var display_position = 100;
    
    //index of the array
    var index = 0;

    //x and y position of the cars
    var x = 175 ;
    var y;

    for(var plr in AllC){
      //add 1 to the index for every loop
      index = index + 1 ;

      //position the cars a little away from each other in x direction
      x = x + 200;
      //use data form the database to display the cars in y direction
      y = displayHeight - AllC[plr].distance;
      Bikes[index-1].x = x;
      Bikes[index-1].y = y;
     // console.log(index, player.index)

     
      //if (index === contestant.index){
       /* stroke(10);
        fill("red");
        ellipse(x,y,60,60);*/
        //Bikes[index - 1].shapeColor = "red";
       
      }
     
      //textSize(15);
      //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
    }

  

  if(keyIsDown(UP_ARROW) && contestant.index !== null){
    contestant.distance +=10
    contestant.update();
  }

  if(keyIsDown(RIGHT_ARROW) && contestant.index !== null){
    contestant.x = contestant.x + 10
    contestant.update();
  }

  if(keyIsDown(RIGHT_ARROW) && contestant.index !== null){
    contestant.x = contestant.x - 10
    contestant.update();
  }


  if(contestant.distance > 3860){
    gameState = 2;
    contestant.rank = contestant.rank + 1;
    contestant.updateBikeAtEnd(contestant.rank);
  }
 rect(displayWidth/10, displayHeight/10, 100,150)
 textSize(8)
 text(contestant.rank, displayWidth/9, displayHeight/9)
  drawSprites();
}
}
