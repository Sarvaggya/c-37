class Quiz {
  constructor(){}

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
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    background("orange")
   textSize(30);
    text("Result Of The Quiz",340,50);
    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    getContestantInfo( )


    //write condition to check if contestantInfor is not undefined
   if( allContestant!==undefined){
      var displayAns=230
     
   }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    fill("black")
    textSize(20);
    text("Contestant Who Answered Correct Are Highlighted With Green Color ",130,230)
  for(var plr in allContestant){
    var correctAns="2"
    if(correctAns===allContestant[plr].answer){
      fill("green")}
    else
    fill("red")
   
    displayAns+=30
    textSize2(20);
    text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,displayAns)
    
  }

  }

}
