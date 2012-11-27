//scores
var score           = 0;
var northScore      = 1;
var eastScore       = 1;
var southScore      = 1;
var westScore       = 1;          
//items
var gun             = true;
var backpack        = true;
var binoculars      = true;
var DogTags         = true;
//location moves
var movecount       = 1;
var NORTH           = 0;
var EAST            = 1;
var SOUTH           = 2;
var WEST            = 3;
var currentlocation = 0
//inventory Array
var inventory = [];
// Navigational 2dArray
var nav = [                    //  N0  E1  S2  W3
             /*location 0 */      [ 1,  4,  6,  8], //start
             /*location 1 */      [ 2, -1,  0, -1], //north1
             /*location 2 */      [ 3, -1,  1, -1], //north2
             /*location 3 */      [-1, -1,  2, -1], //north3
             /*location 4 */      [-1,  5, -1,  0], //east1
             /*location 5 */      [-1, -1, -1,  4], //east2
             /*location 6 */      [ 0, -1,  7, -1], //south1
             /*location 7 */      [ 6, -1, -1, -1], //south2
             /*location 8 */      [-1,  0, -1,  9], //west1
             /*location 9 */      [-1,  8, -1, -1], //west2        
           ];         
function inventoryReader () {
    for (var i=0; i < inventory.length; i++){
      UpdateText (inventory[i]);
    }
} 
function move(direction){
      movecount = movecount + 1; 
        var newlocation = nav[currentlocation][direction];
        if (newlocation !== -1){
        currentlocation = newlocation;     
        displayNewLocation ();
        }else {
            UpdateText ("You cannot go that way.");
      }    
   }
// location prototype
function locationDetails(_RoomName, _info, _score) {
   this.name      = _RoomName;
   this.info     = _info;
   this.score    = _score;
   this.toString = function() {
      var retVal = "";
      retVal = "Name of Room:"    +"\n"+ this.name     + "\n" +
               "Information:"     +"\n"+ this.info     + "\n";
      return retVal;
   }   
}
// Item prototype
function itemDetails(_discription) {
   this.info     = _discription;
   this.toString = function() {
      var retVal = "";
      retVal = "Description of Item:" +"\n"+ this.info + "\n";
      return retVal;
   }   
}

function displayNewLocation (){
     var Items    = []; 
     var location = [];          
      switch (currentlocation){    
          case 0 :  Items   [0] = Start =  new itemDetails("There is a gun in this room.");
                                    UpdateText (Start); 
                    location [0] =  Start =  new locationDetails ("Start", "You are in a clearing at the start of your mission. After walking around for a while you realize you forgot your gun from the very beginning. Have you picked it up yet?", "The item for this room is a gun.",location0());
                                    UpdateText (Start);   
                                   break;
          
          case 1 :  Items    [1] = North1 =  new itemDetails("There isn't an item for this room.");
                                   UpdateText (North1);
                    location [1] = North1  = new locationDetails("North 1",   "A backpack attached to a wing suit lays in front of you.", location1());
                                   UpdateText (North1); 
                  
                                   break;
                                   
          case 2 : Items    [2] =  North2 =  new itemDetails("Your backpack is on the ground.");
                                   UpdateText (North2);
                   location [2] =  North2 = new locationDetails ("North 2", "You are in front of your backpack.", location2());
                                   UpdateText (North2);               
                                   break;
                                   
          case 3 : Items    [3] = North3 =  new itemDetails("There are no items in here.");
                                   UpdateText (North3);
                    location [3] =  North3 = new locationDetails ("North 3", "You continue North and find an abandoned shed. You are not able to go any farther North.", location3());
                                   UpdateText (North3); break;
                                   
          case 4 : Items    [4] = East1 =  new itemDetails("There are no items in here.");
                                   UpdateText (East1);
                   location [4] =  East1 = new locationDetails ("East 1", "You are walking down a long dirt road.", location4());
                                   UpdateText (East1); break;
                                   
          case 5 : Items    [5] = East2 =  new itemDetails("There are binoculars on the ground.");
                                   UpdateText (East2);
                   location [5] =  East2 = new locationDetails ("East 2", "An enemy military watch tower is in front of you. You can not continue going East anymore.", location5());
                                   UpdateText (East2); break;
                                   
          case 6 : Items    [6] = South1 =  new itemDetails("There are no items in here.");
                                   UpdateText (South2);
                   location [6] =  South1 = new locationDetails ("South 1", "There is a large factory roughly two miles away down a road heading South.", location6());
                                   UpdateText (South1); break;
                                   
          case 7 : Items    [7] = South2 =  new itemDetails("There are no items in here.");
                                   UpdateText (South2);
                    location [7] = South2 = new locationDetails ("South 2", "You are now roughly one mile away from the factory, and your mission starting point. You can no longer move South.", location7());
                                   UpdateText (South2); break;
                                   
          case 8 : Items    [8] = West1 =  new itemDetails("There are no items in here.");
                                   UpdateText (West1);
                   location [8] =  West1 = new locationDetails ("West 1", "You are walking down beside a river.", location8());
                                   UpdateText (West1); break;
                                   
          case 9 : Items    [9] = West2 =  new itemDetails("There are Dog Tags on the ground.");
                                   UpdateText (West2);
                   location [9] =  West2 = new locationDetails ("West 2", "A large dam is blocking your way. You can not go West any longer.", location9());
                                   UpdateText (West2); break;
}
} 
function StartingText(){
          msg = "You are at the start of your mission";
         UpdateText (msg)
}            
function location0/*start*/ (){       
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="visible";
           }           
function location1 /* North1 */(){    
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
           if ( northScore === 1 ){
            score = (score + 5)
            northScore= northScore + 1;     
           }
           }
function location2 /*North2*/(){
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
            if ( northScore === 2 ){
            score = (score + 5)
            northScore= northScore + 1;     
           }
           }
 function location3 /*North3*/ (){
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
            if ( northScore === 3 ){
            score = (score + 5)
            northScore= northScore + 1;     
           }
           }
 function location4 /*East1*/ (){
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility= "hidden";  
            if ( eastScore === 1 ){
             score = (score + 5)
             eastScore= eastScore + 1; 
             }
             }                   
function location5 /*East2*/ (){ 
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility= "hidden";  
            if ( eastScore === 2 ){
             score = (score + 5)
             eastScore= eastScore + 1; 
             }
             }                   
function location6 /*South1*/ (){
          document.getElementById("idEast").style.visibility="hidden";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility="visible";                    
          document.getElementById("idNorth").style.visibility="visible"; 
            if ( southScore === 1 ){
             score = (score + 5)
             southScore= southScore + 1;
             }
             }
             
function location7 /*South2*/ (){
          document.getElementById("idEast").style.visibility="hidden";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility="hidden";                    
          document.getElementById("idNorth").style.visibility="visible"; 
            if ( southScore === 2 ){
             score = (score + 5)
             southScore= southScore + 1;
             }
             }
function location8 /*West1*/ (){
          document.getElementById("idNorth").style.visibility="hidden";
          document.getElementById("idEast").style.visibility="visible";
          document.getElementById("idWest").style.visibility="visible";
          document.getElementById("idSouth").style.visibility= "hidden";
            if ( westScore === 1 ){
             score = (score + 5)
             westScore= westScore + 1;
             }
             }
function location9 /*West2*/ (){ 
          document.getElementById("idNorth").style.visibility="hidden";
          document.getElementById("idEast").style.visibility="visible";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility= "hidden";
            if ( westScore === 2 ){
             score = (score + 5)
             westScore= westScore + 1;
            }
            }            
function btn_Score_click () {                    
          UpdateText ("Your score is; " + score);
          } 
function btn_go_click(){
      var userinput = document.getElementById("txtcommand"); 
      switch (userinput.value){
          case "N": move(NORTH); break;     
          case "n": move(NORTH); break;     
          case "E": move(EAST);  break;  
          case "e": move(EAST);  break;  
          case "S": move(SOUTH); break;  
          case "s": move(SOUTH); break;  
          case "W": move(WEST);  break;  
          case "w": move(WEST);  break;  
          case "Take": Take();   break;
          case "Help": Help();   break;
          case "Inventory": inventoryReader(); break;
          case Valid_commands (userinput.value): break;         
          }
          }
function Help(){
          UpdateText("The valid commands for Operation Frost Fire are N to go North, E to go East, S to go South, and W to go West. Type 'Take' to take an item off the ground. Type 'Inventory' to view your items. Any other inputs will not let you continue through the game.");
          }                   
function Valid_commands(){
          UpdateText ("Type 'Help' for valid commands and useful information."); 
          } 
function Take (){  
  switch (currentlocation) {  
      case 0:
      if (gun === false){
      UpdateText ("You already have your gun.");
      }else{
        inventory.push("You have your gun in your inventory.");
        UpdateText ("You have picked up a gun");
      gun = false;
     } 
      break;
      
      case 1:
      UpdateText ("There are no items in this room to take.");
      break;
      
      case 2:
      if (backpack === false){
      UpdateText ("You already have your backpack.");
      }else{
        inventory.push("You have your backpack in your inventory.");
        UpdateText ("You have picked up your backpack");
      backpack = false;
      }
      break;          
      
      case 3:
      UpdateText ("There are no items in this room to take.");
      break;
      
      case 4:
      UpdateText ("There are no items in this room to take.");
      break;
       
      case 5:
      if (binoculars === false){
      UpdateText ("You already have your binoculars.");
      }else{
        inventory.push("You have your binoculars in your inventory.");
        UpdateText ("You have picked up your binoculars");
      backpack = false;
      }
      break;
      
      case 6:
      UpdateText ("There are no items in this room to take.");
      break; 
      
      case 7:
      UpdateText ("There are no items in this room to take.");
      break;        
  
      case 8:
      UpdateText ("There are no items in this room to take.");
      break;
  
      case 9:
      if (DogTags === false){
      UpdateText ("You already have the Dog Tags.");
      }else{
        inventory.push("You have the Dog Tags in your inventory.");
        UpdateText ("You have picked up the Dog Tags");
      backpack = false;
      }
      break;
  }                   
 }
function UpdateText (msg) { 
    msg = msg;
    var ta= document.getElementById ("taGame");
    ta.value= msg + "\n" + ta.value;
    }