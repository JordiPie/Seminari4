require('./connection')

const Book = require('./models/Book')
const User = require('./models/User')

async function main() {

    const book1  = new Book({
        name: 'Harry Potter',
        price: 10
    })
    const bookSaved = await book1.save();

    const user1 = new User({
        username: 'Jordi',
        surname: 'Pie',
        password: '1234'
    })
    const userSaved = await user1.save();

    const user2 = new User({
        username: 'Juan',
        surname: 'Perez',
        password: '1122'
    })
    await user2.save();

    
    console.log(bookSaved);
    console.log(userSaved);
 }
 main();