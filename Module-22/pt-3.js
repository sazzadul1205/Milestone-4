function paperRequirements(book1, book2, book3,) {
    return book1 + book2 + book3;
}
const book1PaperQuantity = 123;
const book2PaperQuantity = 54;
const book3PaperQuantity = 223;

const TotalPageRequired = paperRequirements(book1PaperQuantity, book2PaperQuantity, book3PaperQuantity);

console.log(TotalPageRequired);
