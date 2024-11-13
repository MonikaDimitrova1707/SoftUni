function examArrival(examHour, examMinute, arrivalHour, arrivalMinute) {
    const examTime = examHour * 60 + examMinute;
    const arrivalTime = arrivalHour * 60 + arrivalMinute;

    const timeDifference = arrivalTime - examTime;

    if (timeDifference > 0) {
        console.log("Late");
        if (timeDifference < 60) {
            console.log(`${timeDifference} minutes after the start`);
        } else {
            const hoursLate = Math.floor(timeDifference / 60);
            const minutesLate = timeDifference % 60;
            console.log(`${hoursLate}:${minutesLate < 10 ? '0' : ''}${minutesLate} hours after the start`);
        }
    } else if (timeDifference >= -30) {
        console.log("On time");
        if (timeDifference < 0) {
            console.log(`${Math.abs(timeDifference)} minutes before the start`);
        }
    } else {
        console.log("Early");
        const earlyTime = Math.abs(timeDifference);
        if (earlyTime < 60) {
            console.log(`${earlyTime} minutes before the start`);
        } else {
            const hoursEarly = Math.floor(earlyTime / 60);
            const minutesEarly = earlyTime % 60;
            console.log(`${hoursEarly}:${minutesEarly < 10 ? '0' : ''}${minutesEarly} hours before the start`);
        }
    }
}

examArrival(9, 30, 9, 50);