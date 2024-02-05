function canPay(array, number) {
    const length = array.length;
    if(length > 0) {
        let sum = 0;
        for(let i of array) {
            sum += i;
        }
        if(sum >= number) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Enter your money array.';
    }
}

console.log(canPay([1, 5, 5], 10));