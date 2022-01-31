const router = require('express').Router();
const User = require('../model/user');
const { regesterValidation } = require('../validation');


// ---- regestarion request with validation and encrypted passwords ----
router.post('/regester', async (req, res)=>{
    // ---- validate data ----
    const validation = regesterValidation(req.body);
    if(validation.error){
        res.status(400).send(validation.error.details[0].message);
        return;
    }
    // ---- checking id email exists ---- 

    // ---- Hash password ----

    // ---- Create a new user ----
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser= await user.save();
        res.send({user: savedUser});
    } catch (error) {
        console.log(error);
    }
    console.log(user);
    res.send("sucessfully regestered!");

});

// ---- Login user ----


module.exports = router;