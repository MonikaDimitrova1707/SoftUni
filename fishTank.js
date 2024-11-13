function calculateWaterVolume(length, width, height, percentage) {
    let volumeCubicCm = length * width * height;

    let volumeLiters = volumeCubicCm / 1000;

    let usedSpace = percentage / 100;

    let waterVolume = volumeLiters * (1 - usedSpace);

    console.log(waterVolume.toFixed(5));
}

calculateWaterVolume(85, 75, 47, 17);