function cubeNumber(num) {
    if(typeof num !== 'number') {
        return 'Enter a valid number.';
    }
    const cubeNum = Math.pow(num, 3);
    return cubeNum;
}

console.log(cubeNumber(3));