var num = [23, 67, 55, 89, 80, 1223, 67, 22, 78, 7777, 9090];

for (var i = 0; i < num.length; i++) {
    var numbers = num[i];
    if (numbers >50) {
        continue;
    }
    console.log(numbers);
}
// continue means skiping the content