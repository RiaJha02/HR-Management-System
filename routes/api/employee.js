const express = require('express');
const router = express.Router();

//@route    GET api/employee
//@desc     Test route
//@access   Public

router.get('/', (req,res) => res.send('Employee Route'));

module.exports = router;