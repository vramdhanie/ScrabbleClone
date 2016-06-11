const htmlFontsize = 10; //usse this to handle 
var wordArray = [];
var playedWord ="apple";
var gameBoard = [];

$(document).ready(function() {

//while(wordArray.length ==0){}
// Create Spaces that go on the board, logical plus styling aspects
for (var n = 0; n <= 11; n++){
    for (var j = 0; j <= 11; j++){
        //Draw Main Play Board here
        //Since One Time Deal, will leave here instead of 'draw' function
        d = document.createElement('div');
        var logicalX = j;
        var realX = j*5.4*htmlFontsize;
        var logicalY = n;
        var realY = n*5.4*htmlFontsize;
        $(d).css("left", realX);
        $(d).css("top", realY);
        $(d).addClass("boardspace");
        $(d).appendTo($(".container"));

        //Create the Game board Objects
        var space = new Object();
        space.xVal = logicalX;
        space.yVal = logicalY;
        space.letterVal = "";
        space.bonus = "none";
        gameBoard.push(space);
    }            
}
//  
// End of create tiles functinoality


//Read in from file, raw and create divs


getFile();

$( ".form" ).click(function() {
    var found = 0;
    for(i = 0; i < wordArray.length; i++){
        testString = wordArray[i].replace(/(\r\n|\n|\r)/gm,"");
        //alert(testString);
        if($(".tBox").val() == testString){
            found = 1;
            $(".tBox").css("background-color","green");
        }
    } 
    if(!found){
        $(".tBox").css("background-color","red");
    }   
});

for(i=0;i<gameBoard.length; i++){
    console.log(gameBoard[i].xVal);
    console.log(gameBoard[i].yVal);
}




});//end of .ready


function getFile(){
    var file = "./wordsEn.txt";
    $.get(file,function(txt){
       
        var lines = txt.split("\n");

        for (var i = 0, len = lines.length; i < len; i++) {
            wordArray[i]=lines[i];
        }
        // alert(wordArray.length);



    }); 
}