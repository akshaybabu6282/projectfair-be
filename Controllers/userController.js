const users = require('../Models/userSchema');
const jwt = require("jsonwebtoken")

//controller method for user register
exports.register = async (req, res) => {
    //store the user details to DB
    console.log("inside user register controller");
    const { username, email, password } = req.body
    //check email id present or not
    try {
        const existingUser = await users.findOne({ email: email })
        if (existingUser) {
            res.status(400).json("Account already exist")
        } else {
            console.log("user not exist");
            const newUser = new users({
                username: username,
                email: email,
                password: password,
                github: "",
                linkedin: "",
                profile: ""
            });
            await newUser.save();
            res.status(201).json("User registered successfully")
        }
    } catch (err) {
        res.status(401).json("Register request failed due to", err)
    }
}

//controller method for user login
exports.login = async (req, res) => {
    console.log("inside login controller");
    const { email, password } = req.body
    try {
        const existingUser = await users.findOne({ email: email, password: password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "userpwd123")
            console.log(token);
            res.status(200).json(
                {
                    data: existingUser,
                    token: token
                }
            )
        } else {
            res.status(401).json("Invalid Email or Password")
        }
    } catch (error) {
        res.status(500).json("Internal server error")
    }
}


exports.getUserDetails = (req, res) => {
    res.status(200).json("inside get user details controller")
}