const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Employee = require('../../models/Employee');

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private

router.post('/',
    [
        auth,
        check('name' , 'Name is required').notEmpty(),
        check('email','Please include a valid email').isEmail(),
        check('contact','Contact Number is required').notEmpty(),
        check('location', 'Location is required').notEmpty(),
        check('role', 'Role is required').notEmpty(),
        check('dept','Deaprtment is required').notEmpty(),
        check('salary','Salary is required').notEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        } 
        const {
            name,
            email,
            avatar,
            contact,
            location,
            role,
            dept,
            salary
          } = req.body;
        
        const empFields = {};
        empFields.id = id;
        if(name) empFields.name = name;
        if(email) empFields.email = email;
        if(avatar) empFields.avatar = avatar;
        if(contact) empFields.contact = contact;
        if(location) empFields.location = location;
        if(role) empFields.role = role;
        if(dept) empFields.dept = dept;
        if(salary) empFields.salary = salary;
        
        try {
            
            let profile = await Employee.findOne({ user : id });
            
            if(profile) {
                //Update the existing user
                profile = await Profile.findOneAndUpdate(
                    { user : req.user.id },
                    { $set : empFields },
                    { new : true }
                );
                return res.json(profile);
            }

            //Create new profile
            profile = new Profile(empFields);
            await profile.save();
            res.json(profile);

        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;