const friends = ['Sajid', 'mamun', 'kamal', 'jubayer bin rased', 'Chiku'];

function bestFriend(friendNames) {
    let = largestName = [];
    for (let i = 0; i < friendNames.length; i++) {
        const element = friendNames[i];
        // console.log(element);
        if (friendNames[i].length > largestName.length) {
            largestName = friendNames[i];
        }
        
    }
    return largestName;
}

const BestFriend = bestFriend(friends);
console.log('My best friends name is:',BestFriend);