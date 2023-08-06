const Lyrics = 'When the days are cold And the cards all fold And the saints we see Are all made of gold'

const parts = Lyrics.split(' ');
const sequense = Lyrics.split('.')
console.log(sequense);
console.log(parts);
console.log(Lyrics);
const chars = Lyrics.split('');
// console.log(chars);


const partial = Lyrics.slice(12, 20);
console.log(partial);

const partial2 = Lyrics.substring(5, 20);
console.log(partial2);

// trim
// trim start
// trim end
// concatation name + kora

const lines = [
    'When the days are cold',
    'And the cards all fold',
    'And the saints we see',
    'Are all made of gold',
];

const newsong = lines.join(' . ');
console.log(newsong);
