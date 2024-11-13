function validSubstitutions(input) {
    let K = parseInt(input[0]);
    let L = parseInt(input[1]);
    let M = parseInt(input[2]);
    let N = parseInt(input[3]);
    let substitutions = [];

    for (let firstPlayerFirstDigit = K; firstPlayerFirstDigit <= 8; firstPlayerFirstDigit++) {
        if (firstPlayerFirstDigit % 2 !== 0) continue; 

        for (let firstPlayerSecondDigit = 9; firstPlayerSecondDigit >= L; firstPlayerSecondDigit--) {
            if (firstPlayerSecondDigit % 2 === 0) continue; 

            for (let secondPlayerFirstDigit = M; secondPlayerFirstDigit <= 8; secondPlayerFirstDigit++) {
                if (secondPlayerFirstDigit % 2 !== 0) continue; 

                for (let secondPlayerSecondDigit = 9; secondPlayerSecondDigit >= N; secondPlayerSecondDigit--) {
                    if (secondPlayerSecondDigit % 2 === 0) continue; 

                    let firstNumber = `${firstPlayerFirstDigit}${firstPlayerSecondDigit}`;
                    let secondNumber = `${secondPlayerFirstDigit}${secondPlayerSecondDigit}`;

                    if (firstNumber === secondNumber) {
                        console.log("Cannot change the same player.");
                    } else {
                        console.log(`${firstNumber} - ${secondNumber}`);
                        substitutions.push(`${firstNumber} - ${secondNumber}`);
                    }

                    if (substitutions.length >= 6) {
                        return; 
                    }
                }
                if (substitutions.length >= 6) break; 
            }
            if (substitutions.length >= 6) break; 
        }
        if (substitutions.length >= 6) break; 
    }
}

validSubstitutions(["7", "6", "8", "5"]); 
