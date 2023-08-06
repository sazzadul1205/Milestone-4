function maxinArray(hight) {
    console.log('Elements inside the array:', hight);
    let largest = hight[0];
    for(let i = 0; i < hight.length; i++){
        const index = i;
        const element = hight[index];
        if (element > largest) {
            largest = element
        }
    }
    return largest;

}
const hight = [123, 145, 155, 103, 122, 134, 167,235];
const tallest = maxinArray(hight);
console.log('tallest persion is : ',tallest);

// find the lowes nuber in an array