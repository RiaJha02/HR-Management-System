const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const fetch = require('node-fetch');

const Employee = require('../../models/Employee');
const User = require('../../models/User');

// @route    POST api/employee
// @desc     Create or update employee profile
// @access   Private

router.post(
	'/',
	[
		auth,
		check('name', 'Name is required').notEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('contact', '10 digit-number is required').isLength({ min: 10 }),
		check('location', 'Location is required').notEmpty(),
		check('role', 'Role is required').notEmpty(),
		check('dept', 'Deaprtment is required').notEmpty(),
		check('salary', 'Salary is required').notEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		//Register the Employee
		const userEmp = {
			name     : req.body.name,
			email    : req.body.email,
			password : req.body.email + '1234', //keeping a default password
			roleID   : req.body.name + '-Employee'
		};
		const emp = await fetch('http://localhost:5000/api/user', {
			method  : 'POST',
			body    : JSON.stringify(userEmp),
			headers : { 'Content-Type': 'application/json' }
		})
			.then((res) => res.json())
			.then((err) => console.log(err));

		const Euser = await User.findOne({ email: req.body.email });

		const { contact, location, role, dept, salary } = req.body;

		const empFields = {};
		empFields.user = Euser._id;
		if (contact) empFields.contact = contact;
		if (location) empFields.location = location;
		if (role) empFields.role = role;
		if (dept) empFields.dept = dept;
		if (salary) empFields.salary = salary;

		try {
			let profile = await Employee.findOne({ user: Euser._id });
			if (profile) {
				//Update the existing user
				profile = await Employee.findOneAndUpdate(
					{ user: Euser._id },
					{ $set: empFields },
					{ new: true }
				);
				return res.json(profile);
			}
			//Create new profile
			profile = new Employee(empFields);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/employee
// @desc     Get all employee profiles
// @access   Private

router.get('/', auth, async (req, res) => {
	try {
		const profile = await Employee.find().populate('user', [
			'name',
			'avatar'
		]);
		res.json(profile);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    PUT api/employee/leave/:emp_id
//@desc     Add a leave request by the employees
//@access   Private

router.put(
	'/leave/:emp_id',
	[
		auth,
		[
			check('from', 'Please provide a start date').notEmpty().custom(
				(value, { req }) =>

						req.body.to ? value < req.body.to :
						true
			),
			check('to', 'Please provide an end date').notEmpty(),
			check('reason', 'Provide a reason for the leave request').notEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const profile = await Employee.findOne({
				user : req.params.emp_id
			}).populate('user', [
				'name',
				'avatar'
			]);
			if (!profile) {
				return res.status(400).json({ msg: 'Employee not found' });
			}
			profile.leaves.unshift(req.body);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.log(err.message);
			if (err.kind == 'ObjectID') {
				return res.status(400).json({ msg: 'Profile not found' });
			}
			res.status(500).send('Server Error');
		}
	}
);

//@route    PUT api/employee/pay/:emp_id
//@desc     Add a Pay request by the employees
//@access   Private

router.put(
	'/pay/:emp_id',
	[
		auth,
		[
			check('request', 'Statement for the pay request').notEmpty(),
			check('amount', 'Please provide an amount').notEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const profile = await Employee.findOne({
				user : req.params.emp_id
			}).populate('user', [
				'name',
				'avatar'
			]);
			if (!profile) {
				return res.status(400).json({ msg: 'Employee not found' });
			}
			profile.payroll.unshift(req.body);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.log(err.message);
			if (err.kind == 'ObjectID') {
				return res.status(400).json({ msg: 'Profile not found' });
			}
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
