function findAddress(obj) {
    const street = obj.street ?? '__';
    const house = obj.house ?? '__';
    const society = obj.society ?? '__';

    return `${street},${house},${society}`;
}

console.log(findAddress({street: 10, house: '10A', society: 'Earth'}));