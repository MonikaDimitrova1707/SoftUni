function swimmingRecord(recordInSeconds, distanceInMeters, timePerMeter) {
    let ivanTime = distanceInMeters * timePerMeter;
    
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    
    let totalTime = ivanTime + delay;
    
    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let difference = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}

swimmingRecord(10464, 1500, 20);