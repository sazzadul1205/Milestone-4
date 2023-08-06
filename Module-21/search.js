const Lyrics = 'When the days are cold And the cards all fold And the saints we see Are all made of gold'

const searchString = 'card'
// const doesExist = Lyrics.includes(searchString)


// const doesExist = Lyrics.includes('cards')

// const doesExist = Lyrics.includes('Cards')

// const doesExist = Lyrics.includes('aards')


const LyricsLowerCase = Lyrics.toLowerCase();
// const doesExist = LyricsLowerCase.includes(LyricsLowerCase);
const searchStringLower = searchString.toLowerCase();
const doesExist = LyricsLowerCase.includes(searchStringLower);

const doesExistOneLine =Lyrics.toLowerCase().includes(searchString.toLowerCase())


// console.log(doesExist);
// console.log(doesExistOneLine);

// -------------------------------------


const licLine = Lyrics.indexOf('cards');
console.log(licLine);
//
if (Lyrics.indexOf('sada') != -1) {
    console.log('Exists');
}
else{
    console.log('Does nor exist');
}
//

console.log(Lyrics.startsWith('When'));

console.log(Lyrics.endsWith('cards'));