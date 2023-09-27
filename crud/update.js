require('../connection')

const User = require('../models/User')

async function updateUser() {
    const user = await User.updateMany({username: 'Jordi'}, {
        password:'aa'
    });
    console.log(user)
 }
 updateUser();