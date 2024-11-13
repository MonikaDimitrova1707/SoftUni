function calculateSavings(age, washingMachinePrice, toyPrice) {
    let totalSavings = 0;
    let totalToys = 0;
    let totalMoney = 0;
    let brotherTaken = 0;

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            const moneyFromBirthday = 10 * (birthday / 2);
            totalMoney += moneyFromBirthday;
            brotherTaken += 1;
        } else { 
            totalToys++;
        }
    }

    totalSavings = totalMoney + (totalToys * toyPrice) - brotherTaken;

    if (totalSavings >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavings - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavings).toFixed(2)}`);
    }
}

calculateSavings(10, 170.00, 6);