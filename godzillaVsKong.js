function movieMoney(movieBudget, castCount, singleClothesPrice) {
    let decorMoney = movieBudget * 0.1;
    let totalClothesPrice = castCount * singleClothesPrice; 

    if(castCount > 150) {
        totalClothesPrice *= 0.9;
    }

    let totalPrice = decorMoney + totalClothesPrice;

    if(movieBudget >= totalPrice) {
        let moneyLeft = movieBudget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }else {
        let moneyNeeded = totalPrice - movieBudget;
        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

movieMoney(20000, 120, 55.5);