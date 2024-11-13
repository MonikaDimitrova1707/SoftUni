function fishingTrip(budget, season, numberOfFishers) {
    let boatRental;

    if (season === "Spring") {
        boatRental = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        boatRental = 4200;
    } else if (season === "Winter") {
        boatRental = 2600;
    } else {
        console.log("error");
        return; 
    }

    let discount = 0;

    if (numberOfFishers <= 6) {
        discount = 0.10; 
    } else if (numberOfFishers <= 11) {
        discount = 0.15; 
    } else {
        discount = 0.25; 
    }

    let totalCost = boatRental * (1 - discount);

    if (numberOfFishers % 2 === 0 && season !== "Autumn") {
        totalCost *= 0.95; 
    }

    if (budget >= totalCost) {
        const remainingMoney = budget - totalCost;
        console.log(`Yes! You have ${remainingMoney.toFixed(2)} leva left.`);
    } else {
        const neededMoney = totalCost - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}

fishingTrip(3000, "Summer", 11);