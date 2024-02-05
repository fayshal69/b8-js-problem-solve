function sortMarker(array) {
    const [a, b] = array;
    if(a > 0 && b > 0) {
        if(a === b) {
            return 'Equal';
        }
        else if(a < b) {
            return [b, a];
        }
        else {
            return [a, b];
        }
    }
    if(a < 0 || b < 0) {
        return 'Invalid Input';
    }
}

console.log(sortMarker([4,-1]));