function getSalutation(age, gender) {
    if (gender === 'm') {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else if (gender === 'f') {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    } else {
        console.log("Error: Invalid gender");
    }
}

getSalutation(12, 'f');    