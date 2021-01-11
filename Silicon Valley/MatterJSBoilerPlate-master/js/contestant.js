class Contestant{
    constructor(){
        this.name = null
        this.index = null
        this.distance = 0
        this.rank = null
    }
    //Count of Contestant for starting the game
    countofcontestant(){
        //ContestantCount is written in firebase and its reference or you can say it is being used here
        var countuse = database.ref('ContestantCount');
        countuse.on("value",(data)=>{
          Count = data.val();
        })
      }
//Here we will be Updating the count and in the last one we were collecting the count
      updateCount(count){
        database.ref('/').update({
          Count: count
        });
      }
//Update of Index and Name
      update(){
        var CIndex = "Contestants/Contestant" + this.index;
        database.ref(CIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
//static here is the property of a class and here we are getting the info of the contestant by taking the reference
//of 'Contestants' which is written in database  
      static getCInfo(){
          var CInfo = database.ref('Contestants');
          CInfo.on("value", (data)=>{
              AllC = data.val();
          })
      }
//here we are getting or taking the bike reached at the end by taking the reference of 'BikeAtEnd' which is written or
//defined in firebase datbase 
      getBikeAtEnd(){
          database.ref('BikeAtEnd').on('value',(data)=>{
              this.rank = data.val();
          })
      }
//here we are updating the bike which is reaching at the end
      static updateBikeAtEnd(){
          database.ref('/').update({
              BikeAtEnd : rank
          })
      }






    
    }
