function canWatchSeries(seriesName, episodeDuration, breakDuration) {
    const lunchTime = breakDuration / 8; 
    const restTime = breakDuration / 4; 

    const remainingTime = breakDuration - lunchTime - restTime;

    if (remainingTime >= episodeDuration) {
        const freeTime = Math.ceil(remainingTime - episodeDuration);
        console.log(`You have enough time to watch ${seriesName} and left with ${freeTime} minutes free time.`);
    } else {
        const neededTime = Math.ceil(episodeDuration - remainingTime);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${neededTime} more minutes.`);
    }
}

canWatchSeries("Game of Thrones", 60, 96);