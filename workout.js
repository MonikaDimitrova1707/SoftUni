function checkRunning(input) {
    const days = Number(input[0]); 
    let initialKm = Number(input[1]); 
    let totalKm = initialKm;

    for (let i = 2; i < days + 2; i++) {
        const increasePercent = Number(input[i]); 
        initialKm += initialKm * (increasePercent / 100);
        totalKm += initialKm; 
    }

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
    }
}

checkRunning(["5", "30", "10", "15", "20", "5", "12"]);
