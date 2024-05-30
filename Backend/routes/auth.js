const router = require("express").Router();
const User = require("../models/user");
// const bcrypt = require("bcryptjs");

//sign in

router.post("/register",async (req,res)=>{
    try{
        const {email,username,password} = req.body;

        // const hashPassword = bcrypt.hashSync(password);

        const user = new User({email,username,password:hashPassword});

        await user.save().then(()=> res.status(200).json({user:user})
        );
    }catch(error){
        res.status(400).json({message:"user already exists"});
    }
})

module.exports = router;