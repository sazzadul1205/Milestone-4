const friends = [12, 17, 14, 27, 22, 19, 10, 11, 17];

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const partial = friends.splice(2, 5, 65, 75, 34, 89, 90, 12);
console.log(partial);
console.log(friends);