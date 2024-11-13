function calculateCharityAndMoneyPerDancer(input) {
    const numberOfDancers = Number(input[0]);
    const points = Number(input[1]);
    const season = input[2];
    const location = input[3];

    // Проверка дали входните данни са валидни
    if (numberOfDancers === 0 || points === 0) {
        console.log("Zero tests are not included in the final result.");
        return; // Изход от функцията при нулеви стойности
    }

    let prize;

    if (location === "Bulgaria") {
        prize = points * numberOfDancers;
    } else {
        prize = points * numberOfDancers * 1.5; // Добавяме 50%
    }

    let expensesPercentage;
    if (season === "summer") {
        expensesPercentage = 0.10; // 10% разходи
    } else {
        expensesPercentage = 0.20; // 20% разходи
    }

    const expenses = prize * expensesPercentage;
    const netPrize = prize - expenses;

    const charityAmount = netPrize * 0.75; // 75% за благотворителност
    const moneyPerDancer = (netPrize - charityAmount) / numberOfDancers;

    console.log(`Charity - ${charityAmount.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}

// Примерен вход
calculateCharityAndMoneyPerDancer(["10", "2000", "summer", "Bulgaria"]); // пример 1
calculateCharityAndMoneyPerDancer(["15", "1500", "winter", "Abroad"]); // пример 2
