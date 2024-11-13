function calculate(N1, N2, operator) {
    let result;

    if (operator === '+') {
        result = N1 + N2;
        console.log(`${N1} + ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`);
    } else if (operator === '-') {
        result = N1 - N2;
        console.log(`${N1} - ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`);
    } else if (operator === '*') {
        result = N1 * N2;
        console.log(`${N1} * ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`);
    } else if (operator === '/') {
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            result = N1 / N2;
            console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
        }
    } else if (operator === '%') {
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            result = N1 % N2;
            console.log(`${N1} % ${N2} = ${result}`);
        }
    } else {
        console.log("Invalid operator");
    }
}

calculate(10, 12, "+");