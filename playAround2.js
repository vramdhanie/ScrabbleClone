Math.seedrandom(0228);
const htmlFontsize = 10; //usse this to handle 
var wordArray = [];
var gameBoard = [];
var tileList = [];
var playedWord ="";
var consonants = "bcdfghjklmnpqrstvwxyz";
var vowels = "aeiou";
var selectedTileobject;

//Go ahead and start getting the large file ASAP and setting up objects and DOM
//need to do this first to make adding even listners less of a headache
createwordArray();
createTilelist();
createBoardspaces();


$(document).ready(function() {
    
    //ready for update and draw here

});//end of .ready

//Methods
//Methods
//Methods
//Methods
//Methods

// function drawGamecomponents(){

//  for(var i=0; i < 30; i++){
//      if(tileList[i].played ==0){//Only display tiles that have not been played here
//          d = document.createElement('div');
//          $(d).css("left", tileList[i].homeX);
//             $(d).css("top", tileList[i].homeY);
//             $(d).text(tileList[i].value);
//             $(d).addClass("onboardFormat");
//             $(d).addClass("boardspace");
//             $(d).addClass("tileNatural");
//             $(d).appendTo($(".tileArea"));
//      }
//         console.log(tileList[i].value);
//     }

// }

//create board objects for DOM and memory - initialization
function createBoardspaces(){

    // Create Spaces that go on the board, logical plus styling aspects
    for (var n = 0; n <= 11; n++){
        for (var j = 0; j <= 11; j++){
            //Draw Main Play Board here
            //Since One Time Deal, will leave here instead of 'draw' function
            d = document.createElement('div');
            var space = new Object();

            space.homeX = Math.floor(j*5.4*htmlFontsize);;
            space.homeY = Math.floor(n*5.4*htmlFontsize);

            space.letterVal = "";
            space.locked = 0;

            $(d).css("left",  space.homeX);
            $(d).css("top",  space.homeY);
            $(d).addClass("gameSpaces");
            $(d).addClass("onboardtextFormat");
            $(d).addClass("onboardvisFormat");
            $(d).addClass("gameSpaces");

            

            var ranVal = getRandomArbitrary(0, 100);

            if(ranVal < 60){
                space.bonus = "none";
                $(d).text("  ");
            }

            if((ranVal>60)&&(ranVal<70)){
                 space.bonus = "TW";
                 $(d).text("TW");
                 $(d).addClass("tw");
            }

            if((ranVal>70)&&(ranVal<80)){
                 space.bonus = "DW";
                 $(d).text("DW");
                 $(d).addClass("dw");                
            }

            if((ranVal>80)&&(ranVal<90)){
                 space.bonus = "DL";
                 $(d).text("DL");
                 $(d).addClass("dl");
            }

            if((ranVal>90)&&(ranVal<100)){
                 space.bonus = "TL";
                 $(d).text("TL");
                 $(d).addClass("tl");
            }

            //Push the look to the DOM
            $(d).appendTo($(".container"));
            //Push the logical to memory
            gameBoard.push(space);
        }            
}
//  
// End of create tiles loop

}

//create tile objects for DOM and memory - initialization
function createTilelist(){

var ranVal; 

    for (var n = 0; n < 3; n++){

        for (var j = 0; j <= 9; j++){

            var tile = new Object();
      
            tile.homeX = Math.floor(j*5.4*htmlFontsize);
            tile.homeY = Math.floor(n*5.4*htmlFontsize);
            tile.realX = tile.homeX;
            tile.realY = tile.homeY;
            tile.played = 0;
            tile.selected = 0;

            //get ten vowels and twenty consonants 
            if(n==0){
                ranVal = getRandomArbitrary(0, 5);
                tile.value = vowels.charAt(ranVal);
            }else{
                ranVal = getRandomArbitrary(0, 21);
                tile.value = consonants.charAt(ranVal);
            }
            tileList.push(tile);

            d = document.createElement('div');

            $(d).draggable({ snap: ".gameSpaces" });
            $(d).draggable().css("position", "absolute");

            $(d).css("left", tile.homeX);
            $(d).css("top", tile.homeY);
            $(d).css("transform", "scale(1,1)");
            $(d).text(tile.value);
            $(d).addClass("onboardtextFormat");
            $(d).addClass("onboardvisFormat");
            $(d).addClass("tileNatural");
            
            $(d).appendTo($(".tileArea"));
  
        }
            //Draw Main Play Board here
    }
}

//function that gets the checker file form the server and loads it in memory inside wordArray 
function createwordArray(){
    var file = "./wordsEn.txt";
    $.get(file,function(txt){ 
        var lines = txt.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            wordArray[i]=lines[i];
        }
    }); 
}

//Return the index, works for tiles or gameBoard 
function getId(type, xVal, yVal){
    //console.log("Finding X: " + xVal + " Y: " + yVal);
    if(type==="tile"){
    //Find Object in Memory
        for(var i=0; i < tileList.length; i++){
            if((xVal==tileList[i].realX)&&(yVal == tileList[i].realY)){
                return i;
            }
        }
    }
    console.log("XValue: " + xVal + " YValue: " + yVal);
    alert("Something isn't right");
}
//function that determins if a point (touch or mouseclick) is within a particular square
function isIntersectingsquare(pntX, pntY, squareX,squareY, width) {
    if ((pntX > squareX)&&(pntX<squareX+width)){
        if ((pntY<squareY+width)&&(pntY>squareY)){
            return 1;
        }                     
    }
    return 0;                
}

//rand number helper function
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//function that returns point value of a tile for scoring and formatting tiles 
function returnPointvalue(letter){

    if(letter=='a'){
        return 1;
    }

    if(letter=='b'){
        return 3;
    }

    if(letter=='c'){
        return 3;
    }

    if(letter=='d'){
        return 2;
    }

    if(letter=='e'){
        return 1;
    }

    if(letter=='f'){
        return 4;
    }

    if(letter=='g'){
        return 2;
    }
    if(letter=='h'){
        return 4;
    }
    if(letter=='i'){
        return 1;
    }
    if(letter=='j'){
        return
    }
    if(letter=='k'){
        return 5;
    }
    if(letter=='l'){
        return 1;
    }
    if(letter=='m'){
        return 4;
    }
    if(letter=='n'){
        return 1;
    }
    if(letter=='o'){
        return 1;
    }
    if(letter=='p'){
        return 3;
    }
    if(letter=='q'){
        return 10;
    }
    if(letter=='r'){
        return 1;
    }
    if(letter=='s'){
        return 1;
    }
    if(letter=='t'){
        return 1;
    }
    if(letter=='u'){
       return 1;
    }
    if(letter=='v'){
       return 4;
    }
    if(letter=='w'){
        return 4;
    }
    if(letter=='x'){
        return 8; 
    }
    if(letter=='y'){
        return 4;
    }
    if(letter=='z'){
        return 10;
    }
}

//END Methods
//END Methods
//END Methods
//END Methods


//Event Listners
//Event Listners
//Event Listners
//Event Listners
//When the "p" is clicked check whatever word is in the box and change the text box color - Tester
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


$(".container").click(function(event) {//Should be mouseup when building the rest - HH
            // console.log("mouseup on " +  $(d).css("left") + " " + $(d).css("top"));
    
    var relX = event.pageX - $(".container").offset().left;
    var relY = event.pageY - $(".container").offset().top;   
    //console.log("relX : " + relX + " Y:  " + relY);

    for(var i=0; i < gameBoard.length; i++){
        if(isIntersectingsquare(relX, relY, gameBoard[i].homeX, gameBoard[i].homeY, 5.0*htmlFontsize)){
            console.log("Tile Pressed " + gameBoard[i].homeX + " " + gameBoard[i].homeY);
        }
    }

});

//Determine which tile has been selected
$(".tileNatural").click(function(event) {
            // console.log("mouseup on " +  $(d).css("left") + " " + $(d).css("top"));
    
    //console.log("Tile Area Clicked"); 
    //console.log("client X: " + event.clientX + " Y:  " + event.clientY);  
    // var relX = event.pageX - $(".tileArea").offset().left;
    // var relY = event.pageY - $(".tileArea").offset().top;   
    
    //console.log("relX : " + relX + " Y:  " + relY);
    console.log("scale value: " + $(this).css("transform")[7]);

    if($(this).css("transform")[7] == 2){return false;}

    var activeX = Math.round($(this).position().left); 
    var activeY = Math.round($(this).position().top); 
    var memId= getId("tile", activeX, activeY);

   //Handle Formating first so the sizes are right when comparing next input
    $( ".tileNatural" ).each(function( index ) {
        if((activeX === Math.round($(this).position().left))&&(activeY === Math.round($(this).position().top))){
            $(this).css("transform", "scale(2,2)");
        }else{
            $(this).css("transform", "scale(1,1)");
        }
    });

    //Handle Object
    for(var i = 0; i < tileList.length; i++){
        if(i != memId){
           tileList[i].selected = 0;
        }else{
           tileList[i].selected = 1;
        }
    }

 
        // for(var i = 0; i < tileList.length; i++){
        // if(i != memId){
        //     $(this).css("transform", "scale(1,1)");
        // }else{
        //     $(this).css("transform", "scale(2,2)");
        // }
   // }



    
    
});
//End Event Listners
//End Event Listners
//End Event Listners
//End Event Listners
