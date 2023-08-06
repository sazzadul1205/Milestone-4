// function FunctionName(Parameters) {
//     // function body
//     // return
// }

// var returnvalue = FunctionName(Parameters value)

function gettotal(assingment1, assingment2, assingment3) {
    const total = assingment1 + assingment2 + assingment3;
    const avarage = total / 2;
    return avarage;
}

const assingment1marks = 34;
const assingment2marks = 56;
const assingment3marks = 90;

var myavarage = gettotal(assingment1marks, assingment2marks, assingment3marks)
console.log(myavarage);