const color = 'Purple';
if (color == 'Green') {
    console.log('This color is of Grass');
} 
else if(color == 'Blue'){
    console.log('This color is of sea');
}
else if(color == 'Red'){
    console.log('This color is of blood');
}
else if(color == 'White'){
    console.log('This color is of wall');
}
else if(color == 'Yellow'){
    console.log('This color is of piss');
}
else{
    console.log('There are no color');
}

// switch
switch (color) {
    case 'Green':
        console.log('This color is of Grass');
        break;
    case 'Blue':
        console.log('This color is of sea');
        break;
    case 'Red':
        console.log('This color is of Blood');
        break;
    case 'White':
        console.log('This color is of Sky');
        break;
    case 'Yellow':
        console.log('This color is of piss');
        break;
    default:
        console.log('There are no color');
        break;
}