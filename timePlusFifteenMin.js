function timeAfter15Minutes(hours, minutes) {
    minutes += 15;

    if (minutes >= 60) {
        minutes -= 60;  
        hours += 1;    
    }

    if (hours >= 24) {
        hours = 0; 
    }

    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    console.log(`${hours}:${formattedMinutes}`);
}

timeAfter15Minutes(1, 46); 