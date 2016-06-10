const htmlFontsize = 16; //usse this to handle 
var wordArray = [];
var playedWord ="apple";

$(document).ready(function() {

//while(wordArray.length ==0){}
// Create Spaces that go on the board, logical plus styling aspects
for (var n = 0; n <= 11; n++){
    for (var j = 0; j <= 11; j++){

        d = document.createElement('div');

        var logicalX = j;
        var realX = j*5.4*htmlFontsize;
        var logicalY = n;
        var realY = n*5.4*htmlFontsize;

        $(d).css("left", realX);
        $(d).css("top", realY);

        $(d).addClass("boardspace");
        $(d).appendTo($(".container"));
  //    jQuery('<div class = boardspace/>', {
  //        top: "0rem", 
  //        left: "5.4rem"
        // }).appendTo(".container");   
    }            
}
//  
// End of create tiles functinoality


//Read in from file, raw and create divs


getFile();






// $.ajax({
//             url : "wordsEn.txt",
//             success : function (data) {
//                 // $(".container").html(data);
//                 var lines = data.responseText.split("\n");
//                 alert(lines.length);

//                 for (var i = 0, len = lines.length; i < len; i++) {
           

//                 }
//             }
//         });       


});


function getFile(){
    var file = "./wordsEn.txt";

    //ul = document.createElement('ul'); //First creat ul that will hold li's for wordlist
    //$(ul).addClass("wordList"); //display none in WordList css
    //$(ul).appendTo("html"); //Add to html dom element
    $.get(file,function(txt){
       
        var lines = txt.split("\n");

        for (var i = 0, len = lines.length; i < len; i++) {
            wordArray[i]=lines[i];
        }
        // alert(wordArray.length);
        // wordArray.forEach(function(entry) {
        // alert(entry);
        // });


    }); 
}