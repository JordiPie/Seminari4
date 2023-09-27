require('../connection')

const User = require('../models/User')

const deleteFunction = async () => {
    const result = await User.deleteMany({username: 'Juan'});
    console.log(result)
 }
 deleteFunction();