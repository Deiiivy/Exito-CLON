const userModel = require('../models/loginModel')


const createUser = async(req,res) => {
    try {
    const{name, email, password} = req.body

    const newUser = new userModel({
        name,
        email,
        password
    })

    await newUser.save()
    res.json({mesage: "user created succes"})
} catch (error) {
        res.json({message: "error"})
}
}

const login = async(req,res) => {
    const {email, password} = req.body
    userModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("success")
            }else {
                res.json("the password is incorrect")
            }
        }else {
            res.json("no existed")
        }
    })
}

module.exports = {createUser, login}


