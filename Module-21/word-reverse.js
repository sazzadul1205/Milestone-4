function ReverseWords(str) {
    const words = str.split(' ');
    console.log(words);
    const result = [];
    // [ 'i', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length-1;i >= 0; i--){
        const element = words[i];
        result.push(element)
    }
    const reverse = result.join(' ');
    return reverse;


}

const myString = 'i am a good boy';
ReverseWords(myString)