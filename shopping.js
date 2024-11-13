function shopping(budget, videoCards, processors, ramMemory) {
    const videoCardPrice = 250; 
    const processorPricePercent = 0.35; 
    const ramPricePercent = 0.10; 

    const totalVideoCardsPrice = videoCards * videoCardPrice;
    const processorPrice = totalVideoCardsPrice * processorPricePercent;
    const totalProcessorsPrice = processors * processorPrice; 
    const ramPrice = totalVideoCardsPrice * ramPricePercent; 
    const totalRamPrice = ramMemory * ramPrice;

    let totalPrice = totalVideoCardsPrice + totalProcessorsPrice + totalRamPrice;

    if (videoCards > processors) {
        totalPrice *= 0.85; 
    }

    if (budget >= totalPrice) {
        let leftover = budget - totalPrice;
        console.log(`You have ${leftover.toFixed(2)} leva left!`);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }
}

shopping(900, 2, 1, 3);