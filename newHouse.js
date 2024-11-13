function calculateFlowerCost(flowerType, quantity, budget) {
    let pricePerFlower;

    if (flowerType === "Roses") {
        pricePerFlower = 5.00;
        if (quantity > 80) {
            pricePerFlower *= 0.90; 
        }
    } else if (flowerType === "Dahlias") {
        pricePerFlower = 3.80;
        if (quantity > 90) {
            pricePerFlower *= 0.85; 
        }
    } else if (flowerType === "Tulips") {
        pricePerFlower = 2.80;
        if (quantity > 80) {
            pricePerFlower *= 0.85; 
        }
    } else if (flowerType === "Narcissus") {
        pricePerFlower = 3.00;
        if (quantity < 120) {
            pricePerFlower *= 1.15; 
        }
    } else if (flowerType === "Gladiolus") {
        pricePerFlower = 2.50;
        if (quantity < 80) {
            pricePerFlower *= 1.20; 
        }
    } else {
        console.log("error");
        return;
    }

    const totalCost = pricePerFlower * quantity;

    if (budget >= totalCost) {
        const remainingBudget = budget - totalCost;
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${remainingBudget.toFixed(2)} leva left.`);
    } else {
        const neededMoney = totalCost - budget;
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}

calculateFlowerCost("Roses", 55, 250);