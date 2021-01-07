var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function() {

    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("would you like to SKIP this battle or FIGHT.  Enter SKIP or FIGHT to choose. ");


    if (promptFight === "fight" || promptFight === "FIGHT") {

    }
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    console.log
    (playerName + " attaked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );  
    //Log a resulting message to the consle so we know that it worked.

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerhealth' variable.

    //Log a resulting message to the console so we know that it worked.

    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyHame + " has died! ");

    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left");
    }
    

    //remove players health by subtracting the amount set in enemyAttack variable


    //subtract the value of 'enemyAttack' from the value of 'playerHealth' and playerhealth = playerHealth - enemyAttacl;
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " Attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. " 
    );

    if (playerHealth <=0) {
        window.alert(playerName + " has died. ");
        
    } else {
        window.alert(playerName + " still has " + playerHealth + " health remaining. ");
    
    } else if (promptFight ==="skip" || promptfight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert(" invalid option, try again! ");
    }
     


    console.log(
        playerName + " attacked " + enemyName + " . "  + enemyName + " now has " + enemyHealth + " health remaining. "

    );

    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died");
    }

    else {
        window.alert(enemyName + "still has " + enemyHealth + " health left. ");
    }


};

console.log(enemyName + " attacked " + playerName);



fight();
