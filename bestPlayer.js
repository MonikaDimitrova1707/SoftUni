function bestPlayer(input) {
    let bestPlayer = '';
    let bestGoals = 0;

    for (let i = 0; i < input.length; i += 2) {
        const playerName = input[i]; 
        if (playerName === "END") {
            break; 
        }

        const goals = Number(input[i + 1]); 

        if (goals > bestGoals) {
            bestGoals = goals;
            bestPlayer = playerName;
        }

        if (goals >= 10) {
            break;
        }
    }

    console.log(`${bestPlayer} is the best player!`);
    if (bestGoals >= 3) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
