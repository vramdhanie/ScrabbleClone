Math.seedrandom(0228);
const htmlFontsize = 10; //usse this to handle 
var wordArray = [];
var gameBoard = [];
var tileList = [];
var playedWord ="";
var consonants = "bcdfghjklmnpqrstvwxyz";
var vowels = "aeiou";

//Go ahead and start getting the large file ASAP
createwordArray();

$(document).ready(function() {
    createBoardspaces();
    createTilelist();
    drawGamecomponents();
});//end of .ready






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


$(".container").mouseup(function(event) {
    		// console.log("mouseup on " +  $(d).css("left") + " " + $(d).css("top"));
	
	//console.log("Mouse up"); 
	console.log("client X: " + event.clientX + " Y:  " + event.clientY); 	
	var x = event.pageX - $(".container").offset().left;
  	var y = event.pageY - $(".container").offset().top;	
  	console.log("relX : " + x + " Y:  " + y);

});

$(".tileArea").click(function(event) {
    		// console.log("mouseup on " +  $(d).css("left") + " " + $(d).css("top"));
	
	//console.log("Tile Area Clicked"); 
	//console.log("client X: " + event.clientX + " Y:  " + event.clientY); 	
	var relX = event.pageX - $(".tileArea").offset().left;
  	var relY = event.pageY - $(".tileArea").offset().top;	
  	//console.log("relX : " + relX + " Y:  " + relY);

  	for(var i=0; i < 30; i++){
  		isIntersecting
		if(tileList[i].played ==0){
		}
	}
  	//Determine which tile has been selected


  	
});





//End Event Listners
//End Event Listners
//End Event Listners
//End Event Listners



//Methods
//Methods
//Methods
//Methods
//Methods
function drawGamecomponents(){

	for(var i=0; i < 30; i++){
		if(tileList[i].played ==0){
			d = document.createElement('div');
			$(d).css("left", tileList[i].realX);
            $(d).css("top", tileList[i].realY);
            $(d).text(tileList[i].value);
            $(d).addClass("onboardFormat");
            $(d).addClass("boardspace");
            $(d).addClass("tileNatural");
            $(d).appendTo($(".tileArea"));
		}
        console.log(tileList[i].value);
    }

}


function createBoardspaces(){

    // Create Spaces that go on the board, logical plus styling aspects
    for (var n = 0; n <= 11; n++){
        for (var j = 0; j <= 11; j++){
            //Draw Main Play Board here
            //Since One Time Deal, will leave here instead of 'draw' function
            d = document.createElement('div');
            var space = new Object();

            var logicalX = j;
            var realX = j*5.4*htmlFontsize;
            var logicalY = n;
            var realY = n*5.4*htmlFontsize;

            space.xVal = logicalX;
            space.yVal = logicalY;
            space.letterVal = "";
            space.locked = 0;

            $(d).css("left", realX);
            $(d).css("top", realY);
            $(d).addClass("onboardFormat");
            $(d).addClass("boardspace");

     //        $(d).mouseup(function() {
    	// 	console.log("mouseup on " +  $(d).css("left") + " " + $(d).css("top"));
  			// });

            //deterermine if bonus and format
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



function createTilelist(){

var ranVal; 

    for (var n = 0; n <= 3; n++){

        for (var j = 0; j <= 9; j++){

        	var tile = new Object();

        	tile.logicalX = j;
            tile.realX = j*5.4*htmlFontsize;
            tile.logicalY = n;
            tile.realY = n*5.4*htmlFontsize;
            tile.played = 0;
            tile.selected = 0;


        	if(n==0){
        		ranVal = getRandomArbitrary(0, 5);
        		tile.value = vowels.charAt(ranVal);
        	}else{
        		ranVal = getRandomArbitrary(0, 21);
        		tile.value = consonants.charAt(ranVal);
        	}
        	tileList.push(tile);

        }
            //Draw Main Play Board here
    }



    // for(var i =0; i < 10; i++){
    //     var tile = new Object();
    //     ranVal = getRandomArbitrary(0, 5);
    //     tile.value = vowels.charAt(ranVal);
    //     
    // }

    // for(var k = 10; i < 30; i++){
    //     var tile = new Object();
    //     ranVal = getRandomArbitrary(0, 21);
    //     tile.value = consonants.charAt(ranVal);
    //     tileList.push(tile);
    // }

    // for(var j=0; j < 30; j++){
    //     console.log(tileList[j].value);
    // }

}

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

//function that gets the checker file form the server and loads it in memory inside wordArray 
function createwordArray(){
    var file = "./wordsEn.txt";
    $.get(file,function(txt){
       
        var lines = txt.split("\n");

        for (var i = 0, len = lines.length; i < len; i++) {
            wordArray[i]=lines[i];
        }
        // alert(wordArray.length);



    }); 
}

function isIntersecting(pntX, pntY, squareX,squareY, width) {

	if (PositionX < RandomTileList[k].OnBoardPositionX + 30){
		if (PositionY > RandomTileList[k].OnBoardPositionY)
                            {}
                                if (PositionY < RandomTileList[k].OnBoardPositionY + 30)
                                {}
    }                
}


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


// in order to work 'Math.seed' must NOT be undefined,
// so in any case, you HAVE to provide a Math.seed
// Math.seededRandom = function(max, min) {
//     max = max || 1;
//     min = min || 0;
 
//     Math.seed = (Math.seed * 9301 + 49297) % 233280;
//     var rnd = Math.seed / 233280;
 
//     return min + rnd * (max - min);
// }
// http://indiegamr.com/generate-repeatable-random-numbers-in-js/