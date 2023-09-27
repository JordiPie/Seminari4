require('../connection')

const Book = require('../models/Book')


async function main() {
    const Books = await Book.find();
    console.log(Books)
 }
 main();