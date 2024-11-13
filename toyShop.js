function toyShop(vacationPrice, puzzleCount, dollsCount, bearsCount, minionsCount, trucksCount) {
   let moneyEarned = (puzzleCount * 2.6) + (dollsCount * 3) + (bearsCount * 4.1) + (minionsCount * 8.2) + (trucksCount * 2);
   let totalCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

   if(totalCount >= 50){
    moneyEarned *= 0.75;
   } 

   moneyEarned *= 0.9;
   
   if(moneyEarned >= vacationPrice) {
    let moneyLeft = moneyEarned - vacationPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
   }else {
    let moneyNeeded = vacationPrice - moneyEarned;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
   }
}

toyShop(40.8, 20, 25, 30, 50, 10);