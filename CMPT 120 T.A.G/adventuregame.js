var score = 0;
var Northscore = 1;
var Eastscore = 1;
var Southscore = 1;
var Westscore = 1;          
var currentlocation = "start";
var backpack = false;
var gun = false;

function btn_North_click () {
          
         switch (currentlocation) {
              case "start":currentlocation = "NORTH1";
                    North1();
                    UpdateText (msg);
                    break;
              
              case "NORTH1":currentlocation = "NORTH2";
                    North2();
                    UpdateText (msg);
                    break;
           
              case "NORTH2": currentlocation = "NORTH3";
                     North3();
                     UpdateText (msg);
                     break;
                     
              case "SOUTH1": currentlocation = "start";
                    Start();                   
                    break;
                    
              case "SOUTH2": currentlocation = "SOUTH1";
                     South1();
                     UpdateText (msg);
                     break; 
                     
                    }                     
                    }
                    

 
 function btn_East_click () {
          
          switch (currentlocation){
              case "start": currentlocation = "EAST1";  // add more locations!!
                    East1();                    
                    UpdateText (msg);  
                    break;           
              
              case "EAST1": currentlocation = "EAST2"; 
                    East2();
                    UpdateText (msg);
                    break;
              
              case "WEST1": currentlocation = "start";
                    Start();                    
                    break;
             
              case "WEST2": currentlocation = "WEST1";
                    West1 (); 
                    UpdateText (msg);
                    break;
             
              }
              }
             
         

function btn_South_click () {
          
          switch (currentlocation) {
              case "start": currentlocation = "SOUTH1";  // add more locations!!!!
                    South1 ();
                    UpdateText (msg);
                    break;
              
              case "SOUTH1": currentlocation = "SOUTH2";
                    South2 ();
                    UpdateText (msg);
                    break;
              
              case "NORTH3":currentlocation = "NORTH2";
                    North2 ();
                    UpdateText (msg);
                    break;
              
              case "NORTH2": currentlocation = "NORTH1";
                    North1 ();
                    UpdateText (msg);
                    break;
                    
            
              case "NORTH1": currentlocation = "start";
                    Start();                   
                    break;
              
              }
              }
                    
                  
function btn_West_click () {
          
          switch (currentlocation) {
               case "start": currentlocation = "WEST1"; //ADD MORE LOCATIONS
                     West1 ();
                     UpdateText (msg);
                     break;
               
              case "WEST1": currentlocation = "WEST2";
                      West2 ();
                      UpdateText (msg);
                      break;
              
               case "EAST1": currentlocation = "start";
                      Start ();                     
                      break;             
               
               case "EAST2": currentlocation = "EAST1";
                      East1 ();
                      UpdateText (msg);
                      break;

               }
               }
function Take (){
          
          switch (currentlocation) {
                case "NORTH2":  
                    if (backpack === false) {
                    backpack = true;
                    UpdateText ("You have your backpack in your inventory.")           
              }
                 break;

                 case "start":
                    if (gun === false){
                    gun = true;
                    UpdateText ("You have your gun. I hope you picked it up the first time around.")             
                
              }
                 break;
                  
                  case "NORTH1":
                  case "NORTH3":
                  case "EAST1":
                  case "EAST2":
                  case "SOUTH1":
                  case "SOUTH2":
                  case "WEST1":
                  case "WEST2":                
                  UpdateText ("There is nothing to take here.");
                  break;
                
              }
              }     
               
               

// START IS MY INIT FUNCTION
function Start (){
         msg = "You are in a clearing at the start of your mission. Do not forget to take your gun, otherwise you will be in real trouble later on. If you can not remember if you picked up your gun or not, try checking your Inventory.";
         UpdateText (msg);
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility="visible";
           }           
           
function North1 (){
         msg = "A backpack attached to a wing suit lays in front of you.";
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
           if ( Northscore === 1 ){
            score = (score + 5)
            Northscore= Northscore + 1;     
           }
           }
    
 
function North2 (){
         msg = "You are in front of your backpack. Have you picked up the backpack yet? If not you might want to. If you can not remember if you picked up your backpack or not, try checking your Inventory.";
         document.getElementById("idNorth").style.visibility="visible";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
            if ( Northscore === 2 ){
            score = (score + 5)
            Northscore= Northscore + 1;     
           }
           }

 function North3 (){
          msg = "You continue North and find an abandoned shed. You are not able to go any farther North."
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="hidden";
         document.getElementById("idSouth").style.visibility= "visible";   
            if ( Northscore === 3 ){
            score = (score + 5)
            Northscore= Northscore + 1;     
           }
           }
 
 
 function East1 (){
         msg= "You are walking down a long dirt road.";
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="visible";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility= "hidden";  
            if ( Eastscore === 1 ){
             score = (score + 5)
             Eastscore= Eastscore + 1; 
             }
             }                   

function East2 (){ 
          msg= "An enemy military watch tower is in front of you. You can not continue going East anymore.";
         document.getElementById("idNorth").style.visibility="hidden";
         document.getElementById("idEast").style.visibility="hidden";
         document.getElementById("idWest").style.visibility="visible";
         document.getElementById("idSouth").style.visibility= "hidden";  
            if ( Eastscore === 2 ){
             score = (score + 5)
             Eastscore= Eastscore + 1; 
             }
             }                   


function South1 (){
          msg= "There is a large factory roughly two miles away down a road heading South.";
          document.getElementById("idEast").style.visibility="hidden";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility="visible";                    
          document.getElementById("idNorth").style.visibility="visible"; 
            if ( Southscore === 1 ){
             score = (score + 5)
             Southscore= Southscore + 1;
             }
             }

function South2 (){
          msg= "You are now roughly one mile away from the factory, and your mission starting point. You can no longer move South.";
          document.getElementById("idEast").style.visibility="hidden";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility="hidden";                    
          document.getElementById("idNorth").style.visibility="visible"; 
            if ( Southscore === 2 ){
             score = (score + 5)
             Southscore= Southscore + 1;
             }
             }



function West1 (){
          msg = "You are walking down beside a river.";
          document.getElementById("idNorth").style.visibility="hidden";
          document.getElementById("idEast").style.visibility="visible";
          document.getElementById("idWest").style.visibility="visible";
          document.getElementById("idSouth").style.visibility= "hidden";
            if ( Westscore === 1 ){
             score = (score + 5)
             Westscore= Westscore + 1;
          }
          }

function West2 (){ 
          msg= "A large dam is blocking your way. You can not go West any longer.";
          document.getElementById("idNorth").style.visibility="hidden";
          document.getElementById("idEast").style.visibility="visible";
          document.getElementById("idWest").style.visibility="hidden";
          document.getElementById("idSouth").style.visibility= "hidden";
            if ( Westscore === 2 ){
             score = (score + 5)
             Westscore= Westscore + 1;
          }
          }

function btn_Score_click () {                    
          UpdateText ("Your score is; " + score);
          } 

function btn_go_click(){
      var userinput = document.getElementById("txtcommand"); 
      switch (userinput.value){
          
          case "N":
          btn_North_click();          
          break;     
    
          case "n":
          btn_North_click();          
          break;     
    
          case "E":
          btn_East_click();          
          break;  
    
          case "e":
          btn_East_click();          
          break;  
             
          case "S":
          btn_South_click();          
          break;  

          case "s":
          btn_South_click();          
          break;  
    
    
          case "W":
          btn_West_click();          
          break;  
         
          case "w":
          btn_West_click();          
          break;  
          
          case "Take":
          Take();
          break;
          
          case "Help":
          Help();
          break;
          
          case "Inventory":
          Inventory();
          break;
          
          case Valid_commands (userinput.value):
          break;
          
          }
          }

function Inventory(){
          if (backpack && gun === true){
          UpdateText ("You have your gun and your backpack in your inventory.");
          }else{ 
          if (gun === true){
          UpdateText("You have your gun in your inventory.");
          }else{
          if (backpack === true){
          UpdateText("You have your backpack in your inventory.");
          }else{
          UpdateText ("Nothing is in your inventory.");
          }
          }
          }
          }
          
function Help(){
          UpdateText("The valid commands for Operation Frost Fire are N to go North, E to go East, S to go South, and W to go West. Type 'Take' to take an item off the ground. Type 'Inventory' to view your items. Any other inputs will not let you continue through the game. Your current location is..");
          }
                   
function Valid_commands(){
          UpdateText ("Type 'Help' for valid commands and useful information."); 
          }
   

function UpdateText (msg) { 
    msg = msg + "[" + currentlocation +" ]" ;
    var ta= document.getElementById ("taGame");
    ta.value= msg + "\n" + ta.value;
    }