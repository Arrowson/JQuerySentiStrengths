
// Create a header variable that is equal to the id you created in the HTML document -- change the JS to jQuery!
var header = document.getElementById("header");


// Change the header color to something other than black -- change the JS to jQuery!



/*

// Choose five colors and make it so that when the page refreshes the header
// becomes one of those five colors at random.
var colors = ["red", "orange", "yellow", "green", "blue", "violet"];

var LoadRandomColor = Math.floor(Math.random() * 6);

$("#header").css("color", colors[LoadRandomColor]);

// Use jQuery to change the color of the header with a click of the header
$("#header").click(function(){
  var randomColor = Math.floor(Math.random() * 6);
  
  $("#header").css("color", colors[randomColor]);
  
});


// Use jQuery to change the color of the header with a press of the spacebar
$(document).keydown(function(keyPressed){
	   if (keyPressed.keyCode == 32){
	       var randomColor = Math.floor(Math.random() * 6);
  
          $("#header").css("color", colors[randomColor]);
  
}
});




// Use jQuery to change the background color of the cells in the table
$(document).ready(function () {

    $("#r1c1").click(function () {
      $("#r1c1").css("background-color", "brown");
      
    });
    
    $("#r1c2").click(function () {
      $("#r1c2").css("background-color", "brown");
      
    });
    
});

*/

//declaring the variables for where our treasure will be located. Empty to begin with.
var treasureRow;
var treasureColumn;

    //assign random values to our treasure variables
    treasureRow = Math.floor(Math.random() * 5) + 1;
    treasureColumn = Math.floor(Math.random() * 5) + 1;
    
//concatenate the treasureRow and Column into one string that can be used as an id for the cells
var assignToTD = "#r" + treasureRow + "c" + treasureColumn;

var colors = ["pink", "green", "blue", "orange", "red"];

//DEBUG:
// var assignTOTD = "#r1c1" 


//DEBUG FOR TREASURE LOCATION
//$(assignToTD).css("background-color", "orange");

//when somewhere is clicked in the body:
 $('body').click(function(event) {
   
   //assign the target (that was clicked) to a variable
   var clicked = event.target;
   
   //DEBUG:
   console.log(clicked);
   
   //take the first letter of the id of the element that was clicked
   var checked = clicked.id.slice(0, 1);
   
   //DEBUG:
   //console.log(checked);
   
            //check if the clicked element's ID starts with 'r'
            if(checked == "r"){
                //if it's the treasure, turn yellow
            if($(event.target).is(assignToTD)){
               $(assignToTD).css("background-color", "yellow");
               alert("Ye did it ye landlubber!");
               //otherwise turn it brown
            }else{
               $(clicked).css("background-color", "brown");
            }
            //tell the user to click a cell rather than the header or something.
            }else{
                alert("Please click a cell.")
            }
   
 });
 
 
 
