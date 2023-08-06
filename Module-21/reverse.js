function ReverseString(text) {
    let reverse = '';
    for (let i = text.length-1; i >= 0; i--) {
        const element = text[i];
        reverse = reverse + element
        console.log(element, reverse);
    }
    return reverse;
}

const mystring = 'i am a good boy';
const reverse = ReverseString(mystring);
console.log(reverse);
