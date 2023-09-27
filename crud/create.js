require('../connection')

const Book = require('../models/Book')


const createBook = async () => {
   const fantasy =  new Book({
        name: 'The Beginign After the End',
        price: 12
    })
    await fantasy.save();

    const mistery =  new Book({
        name: 'Sherlok Holmes',
        price: 8
    })
    await mistery.save();
 }
 createBook();