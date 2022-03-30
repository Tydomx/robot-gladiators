// Game States
// "Win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less


// inputting user name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy robots, health, attack
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// end of global variables



// this creates a function expression named "fight"
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
            
    // asking player if they want to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attack " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }

    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

}
    

};

// calls fight() function multiple times using the element in enemyNames[i]
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
};
