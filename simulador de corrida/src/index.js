//Players (declared as global constants, no user selection)
const player1 = {
    Name: "Mario",
    Speed: 4,
    Maneuverability: 3,
    Power: 3,
    Point: 0,
};

const player2 = {
    Name: "Luigi",
    Speed: 3,
    Maneuverability: 4,
    Power: 4,
    Point: 0,
};

//Function to roll dice
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//Function to get a random track block
async function getRandomBlock() {
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "Straight"
            break;
        case random < 0.66:
            result = "Curve"
            break;
        default:
            result = "Confrontation"
    }

    return result
}

//Function to log dice roll results
async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolled a dice for ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

//Race engine function
async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Round ${round}`);

        // Draw block
        let block = await getRandomBlock();
        console.log(`Block: ${block}`);

        // Roll the dice
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Skill teste result (initialized to 0)
        let testeSkill1 = 0;
        let testeSkill2 = 0;

        //track straight
        if(block === "Straight"){
            testeSkill1 = diceResult1 + character1.Speed;
            testeSkill2 = diceResult2 + character2.Speed;

            await logRollResult(
                character1.Name,
                "Speed",
                diceResult1,
                character1.Speed
            );

            await logRollResult(
                character2.Name,
                "Speed",
                diceResult2,
                character2.Speed
            );
        }

        // Track curve
        if(block === "Curve"){
            testeSkill1 = diceResult1 + character1.Maneuverability;
            testeSkill2 = diceResult2 + character2.Maneuverability;

            await logRollResult(
                character1.Name,
                "Maneuverability",
                diceResult1,
                character1.Maneuverability
            );

            await logRollResult(
                character2.Name,
                "Maneuverability",
                diceResult2,
                character2.Maneuverability
            );
        }

        //track confrontation
        if(block === "Confrontation"){
            let powerResult1 = diceResult1 + character1.Power;
            let powerResult2 = diceResult2 + character2.Power;

            console.log(`${character1.Name} confronted ${character2.Name}! 🥊`);

            await logRollResult(
                character1.Name,
                "Power",
                diceResult1,
                character1.Power
            );

            await logRollResult(
                character2.Name,
                "Power",
                diceResult2,
                character2.Power
            );

            if (powerResult1 > powerResult2){
                console.log(`${character1.Name} won the confrontation!`)
                //Loser randomly draws if the loser 1 point(shell) or 2 points(bomb)
                //50% chance of 1 point or 2 point
                let penalty = Math.random() < 0.5 ? 1 : 2;
                character2.Point = Math.max(0, character2.Point - penalty);
                console.log(`${character2.Name} lost ${penalty} point(s) (item: ${penalty === 1 ? 'shell' : 'bomb'})! Current points: ${character2.Point} 🐢`);

                //Winner randomly gains a turbo
                if (Math.random() <0.5){
                    character1.Point++;
                    console.log(`${character1.Name} gained a turbo and +1 point! Current points: ${character1.Point} 🚀`);
            }
        }else if (powerResult2 > powerResult1) {
            console.log(`${character2.Name} won the confrontation!`);
            //Loser randomly draws if the loser 1 point(shell) or 2 points(bomb)
            //50% chance of 1 point or 2 point
            let penalty = Math.random() < 0.5 ? 1 : 2;
            character1.Point = Math.max(0, character1.Point - penalty);
            console.log(`${character1.Name} lost ${penalty} point(s) (item: ${penalty === 1 ? 'shell' : 'bomb'})! Current points: ${character1.Point} 🐢`);

            //Winner randomly gains a turbo
            if (Math.random() < 0.5){
                character2.Point++;
                console.log(`${character2.Name} gained a turbo and +1 point! Current points: ${character2.Point} 🚀`);
            }
        } else{
            console.log("Tied confrontation! No points lost or gained.");
        }

    }

        // Checking the winner
        if (testeSkill1 > testeSkill2){
            console.log(`${character1.Name} scored a point!`);
            character1.Point++;
        }else if (testeSkill2 > testeSkill1){
            console.log(`${character2.Name} scored a point!`);
            character2.Point++;
        } else {
            console.log("Tie on the straight track! No one scored a point.");
        }

        console.log("----------------------------------------");
    }   
}

//Function to declare the winner
async function declaredWinner(character1, character2) {
    console.log("\n--- Final Results ---\n")
    console.log(`${character1.Name}: ${character1.Point} Point(s)`);
    console.log(`${character2.Name}: ${character2.Point} Point(s)`);

    if (character1.Point > character2.Point){
        console.log(`\n🏆 ${character1.Name} WON! 🏆\n`);
    }else if(character2.Point > character1.Point){
        console.log(`\n🏆 ${character2.Name} WON! 🏆\n`);
    }else{
        console.log("\n⚠️ The race ended in a DRAW!!⚠️\n");
    }
}

//Auto-invoked main function
(async function main() {
    console.log(
        `🏁🚨 Race between ${player1.Name} and ${player2.Name} starting...\n`
    );

    //call the race engine with the predefined players
    await playRaceEngine(player1, player2);
    await declaredWinner(player1, player2);
})();