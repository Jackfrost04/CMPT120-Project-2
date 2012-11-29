//scores
var score           = 0;
var northScore      = 1;
var eastScore       = 1;
var southScore      = 1;
var westScore       = 1;          
//items
var Key1            = true;
var Key2            = true;
var Key3            = true;
var Key4            = true;
var magicalSword    = true;
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
          case 0 :  Items   [0] = Start =  new itemDetails("The first Key to start you adventure is in this room. Take it to begin.");
                                    UpdateText (Start); 
                    location [0] =  Start =  new locationDetails ("Start", "You are inside of the dining room where the Sneaky Teemo eats his meals. The item for this room is your first magical key.",location0());
                                    UpdateText (Start);   
                                   break;
          
          case 1 :  Items    [1] = North1 =  new itemDetails("There isn't an item for this room.");
                                   UpdateText (North1);
                    location [1] = North1  = new locationDetails("North 1",   "You have just walked into a dark musty hallway. The Sneaky Teemo’s stench is quite potent.", location1());
                                   UpdateText (North1); 
                  
                                   break;
                                   
          case 2 : Items    [2] =  North2 =  new itemDetails("There is a magical sword inside of a chest with four key holes.");
                                   UpdateText (North2);
                   location [2] =  North2 = new locationDetails ("North 2", "You are outside of a large palace chamber where the stench from the death and decay from the Sneaky Teemo causes you to nearly puke all over the ground.", location2());
                                   UpdateText (North2);               
                                   break;
                                   
          case 3 : Items    [3] = North3 =  new itemDetails("There are no items in here.");
                                   UpdateText (North3);
                    location [3]; if (magicalSword === false){
                                   North3 = new locationDetails ("North 3", "You have battled the Sneaky Teemo valiantly and slain the demon! CONGRATULATIONS!! YOU WON!", location3());
                                   UpdateText (North3); break;
                                   }else{
                                   if (magicalSword === true){
                                   North3 = new locationDetails ("North 3", "You did not have all of your required items so the Sneaky Teemo one shot you. You LOST. Reload the game to try again.", endGame());
                                   UpdateText (North3); break;
                                   }
                                   }
                                   
                                   
          case 4 : Items    [4] = East1 =  new itemDetails("There are no items in here.");
                                   UpdateText (East1);
                   location [4] =  East1 = new locationDetails ("East 1", "You are inside of a  corridor where you smell something grotesque cooking from the kitchen.", location4());
                                   UpdateText (East1); break;
                                   
          case 5 : Items    [5] = East2 =  new itemDetails("The second key is inside of a chest sitting on the kitchen counter.");
                                   UpdateText (East2);
                   location [5] =  East2 = new locationDetails ("East 2", "You are inside of the kitchen where the Sneaky Teemo is cooking some sort of monstrosity in the oven. On the table next to the fridge you see a chest with one key hole.", location5());
                                   UpdateText (East2); break;
                                   
          case 6 : Items    [6] = South1 =  new itemDetails("There are no items in here.");
                                   UpdateText (South1);
                   location [6] =  South1 = new locationDetails ("South 1", "You walk outside into a garden engulfed in man eating plants.", location6());
                                   UpdateText (South1); break;
                                   
          case 7 : Items    [7] = South2 =  new itemDetails("The third key is inside of a chest beside one of the man eating plants.");
                                   UpdateText (South2);
                    location [7] = South2 = new locationDetails ("South 2", "After walking a ways through the garden you find a chest with two key holes.", location7());
                                   UpdateText (South2); break;
                                   
          case 8 : Items    [8] = West1 =  new itemDetails("There are no items in here.");
                                   UpdateText (West1);
                   location [8] =  West1 = new locationDetails ("West 1", "You walk into the cellar and see goggles hanging up on a hook. ", location8());
                                   UpdateText (West1); break;
                                   
          case 9 : Items    [9] = West2 =  new itemDetails("The fourth key is inside of a chest with three key holes underneath a shelf unit filled with poison filled vials.");
                                   UpdateText (West2);
                   location [9] =  West2 = new locationDetails ("West 2", "You walk farther into the cellar and see poison vials all around.", location9());
                                   UpdateText (West2); break;
}
} 
function StartingText(){
          msg = "You are inside of the dining room where the Sneaky Teemo eats his meals. The item for this room is your first magical key. Take it to begin.";
         UpdateText (msg)
}
function endGame(){
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility="hidden";
         document.getElementById("idGo").style.visibility="hidden";
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
          UpdateText("The valid commands for Killing the Sneaky Sneak are N to go North, E to go East, S to go South, and W to go West. Type Take to take an item off the ground. Type Inventory to view your items. Any other inputs will not let you continue through the game.");
          }                   
function Valid_commands(){
          UpdateText ("Type Help for valid commands and useful information."); 
          } 
function Take (){  
  switch (currentlocation) {  
      case 0:
      if (Key1 === false){
      UpdateText ("You already have your first key.");
      }else{
      if (Key1 === true){
        inventory.push("You have your first magical key in your inventory.");
        UpdateText ("You have picked up the first key.");
     Key1 = false;
     }
     }      
      break;
      
      case 1:
      UpdateText ("There are no items in this room to take.");
      break;
      
      case 2:
      if (Key4 === false){
       UpdateText ("You Have unlocked the final chest and have taken a magical sword.");
       inventory.push("You have your magical sword in your inventory.");
       magicalSword = false;
      }else{
       UpdateText ("You can not unlock the final chest to claim your final item because you do not have all of they keys. Go back and try and find all of them.");
      }
      break;          
      
      case 3:
       UpdateText ("There are no items in this room to take.");
      break;
      
      case 4:
       UpdateText ("There are no items in this room to take.");
      break;
       
      case 5:
      if (Key2 === false){
      UpdateText ("You already have your second key.");
      }else{     
      if (Key1 === true){
      UpdateText ("You can not unlock this chest because you do not have enough keys. Go back and find the rest.");      
      }else{
      if (Key1 === false){         
        UpdateText ("You have unlocked the chest with one key hole and claimed your second key.");
        inventory.push("You have your second magical key in your inventory.");
        Key2 = false;  
      }    
      }
      }     
      break;
           
      case 6:
      UpdateText ("There are no items in this room to take.");
      break; 
      
      case 7:
      if (Key3 ===false){
      UpdateText ("you already have your third key.");
      }else{
      if (Key1 || Key2 === true){
      UpdateText ("You can not unlock this chest because you do not have enough keys.Go back and find the rest.");
      }else{
      if (Key2 === false){             
        UpdateText ("You have unlocked the chest with two key hole and claimed your third key.");
        inventory.push("You have your third magical key in your inventory.");
      Key3 = false;
      }
      }
      }      
      break;        
  
      case 8:
      UpdateText ("There are no items in this room to take.");
      break;
  
      case 9:
      if (Key4 === false){
      UpdateText ("You already have your fourth key.");
      }else{
      if (Key1 || Key2 || Key3 === true){
        UpdateText ("You can not unlock this chest because you do not have enough keys.Go back and find the rest.");
      }else{
      if (Key3 === false){ 
        UpdateText ("You have unlocked the chest with three key holes and claimed your fourth key.");
        inventory.push("You have your fourth magical key in your inventory.");
      Key4 = false;
      }
      }
      }
      break;
  }                   
 }
function UpdateText (msg) { 
    msg = msg;
    var ta= document.getElementById ("taGame");
    ta.value= msg + "\n" + ta.value;
    }