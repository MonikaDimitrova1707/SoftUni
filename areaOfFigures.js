function areaOfFigures(arg1, arg2, arg3) {
    let type = arg1;

    if(type === "square") {
        let a = Number(arg2);
        let result = a * a;
        console.log(result.toFixed(3));
    }else if(type === "rectangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        let result = a * b;
        console.log(result.toFixed(3));
    }else if(type === "circle") {
        let r = Number(arg2);
        let result = Math.PI * Math.pow(r,2);
        console.log(result.toFixed(3));
    }else if(type === "triangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        let result = a * b / 2;
        console.log(result.toFixed(3));
    }
}

areaOfFigures("triangle", 4.5, 20);