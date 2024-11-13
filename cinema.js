function calculateIncome(projectionType, rows, columns) {
    let income = 0;

    if (projectionType === "Premiere") {
        income = rows * columns * 12.00; 
    } else if (projectionType === "Normal") {
        income = rows * columns * 7.50; 
    } else if (projectionType === "Discount") {
        income = rows * columns * 5.00; 
    } else {
        console.log("error"); 
        return;
    }

    console.log(`${income.toFixed(2)} leva`);
}

calculateIncome("Premiere", 10, 12);