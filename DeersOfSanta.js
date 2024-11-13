function reindeerFood(inputData) {
    let daysAbsent = Number(inputData[0]); 
    let foodLeft = Number(inputData[1]);
    let foodPerReindeer1 = Number(inputData[2]); 
    let foodPerReindeer2 = Number(inputData[3]); 
    let foodPerReindeer3 = Number(inputData[4]); 

    let totalFoodNeeded = daysAbsent * (foodPerReindeer1 + foodPerReindeer2 + foodPerReindeer3);

    if (foodLeft >= totalFoodNeeded) {
        let remainingFood = Math.floor(foodLeft - totalFoodNeeded); 
        console.log(`${remainingFood} kilos of food left.`);
    } else {
        let foodShortage = Math.ceil(totalFoodNeeded - foodLeft); 
        console.log(`${foodShortage} more kilos of food are needed.`);
    }
}

reindeerFood([2, 10, 1, 1, 2]);
