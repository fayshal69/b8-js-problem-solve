function matchFinder(str1, str2) {
    if(typeof str1 !== 'string'|| typeof str2 !== 'string') {
        return 'Enter string as input.';
    }
    if(str1.includes(str2)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(matchFinder(1, 'Pet'));