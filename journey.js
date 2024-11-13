function vacationBudget(budget, season) {
    let destination;
    let accommodation;
    let expense;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            accommodation = "Camp";
            expense = budget * 0.30; 
        } else { 
            accommodation = "Hotel";
            expense = budget * 0.70; 
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            accommodation = "Camp";
            expense = budget * 0.40; 
        } else { 
            accommodation = "Hotel";
            expense = budget * 0.80; 
        }
    } else {
        destination = "Europe";
        accommodation = "Hotel"; 
        expense = budget * 0.90; 
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${expense.toFixed(2)}`);
}

vacationBudget(50, "summer");