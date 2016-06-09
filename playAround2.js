const htmlFontsize = 16; //usse this to handle 


$(document).ready(function() {

for (var n = 0; n <= 11; n++){
    for (var j = 0; j <= 11; j++){

    	var logicalX = j;
    	var realX = j*5.4*htmlFontsize;
    	var logicalY = n;
    	var realY = n*5.4*htmlFontsize;
    	d = document.createElement('div');
    	$(d).addClass("boardspace");
    	$(d).css("left", realX);
    	$(d).css("top", realY);
    	$(d).appendTo($(".container"));
  //   	jQuery('<div class = boardspace/>', {
  //   		top: "0rem", 
  //   		left: "5.4rem"
		// }).appendTo(".container");
    	
    }            
}


});