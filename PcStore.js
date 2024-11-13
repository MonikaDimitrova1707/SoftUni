function pcStore(cpuPrice, gpuPrice, ramPrice, ramCount, discount) {
    cpuPrice = parseFloat(cpuPrice);
    gpuPrice = parseFloat(gpuPrice);
    ramPrice = parseFloat(ramPrice);
    ramCount = parseInt(ramCount, 10);
    discount = parseFloat(discount);

    if (cpuPrice < 200 || cpuPrice > 3000 || 
        gpuPrice < 100 || gpuPrice > 1500 || 
        ramPrice < 80 || ramPrice > 500 || 
        ramCount < 1 || ramCount > 4 || 
        discount < 0.01 || discount > 0.1) {
        console.log("Input values out of range");
        return; 
    }

    const dollarToLev = 1.57; 

    let discountedCpuPrice = cpuPrice * (1 - discount);
    let discountedGpuPrice = gpuPrice * (1 - discount);
    let totalRamPrice = ramPrice * ramCount;

    let totalPriceInDollars = discountedCpuPrice + discountedGpuPrice + totalRamPrice;

    let totalPriceInLeva = totalPriceInDollars * dollarToLev;

    console.log(`Money needed - ${totalPriceInLeva.toFixed(2)} leva.`);
}

pcStore([500, 200, 80, 2, 0.05]);