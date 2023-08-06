const names = ['abul', 'babul', 'sabul', 'ebul', 'cabul','babul', 'cbul', 'babul', 'kabul', 'nabul', 'babul']

function RemoveDuplicate(name) {
    const uniqe = [];
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if (uniqe.includes(element) === false) {
            uniqe.push(element);
        }
    }
    return uniqe;
}

const uniqeNames = RemoveDuplicate(names);
console.log(uniqeNames);
