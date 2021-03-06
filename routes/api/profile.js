const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Employee = require('../../models/Employee');

//@route    GET api/profile/me
//@desc     Get current user profile
//@access   Private

router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.user.id
		}).populate('user', [
			'name',
			'email',
			'avatar'
		]);
		if (!profile) {
			return res
				.status(400)
				.json({ msg: 'There is no profile for this user' });
		}
		res.json(profile);
	} catch (err) {
		console.log(err);
		res.status(500).send('Server Error');
	}
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private

router.post(
	'/',
	[
		auth,
		check('designation', 'Desination is required').not().isEmpty(),
		check('skills', 'Skills is required').not().isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			company,
			location,
			designation,
			skills,
			bio,
			twitter,
			linkedin,
			facebook,
			instagram
		} = req.body;

		const profileFields = {};
		profileFields.user = req.user.id;
		if (company) profileFields.company = company;
		if (location) profileFields.location = location;
		if (designation) profileFields.designation = designation;
		if (skills)
			profileFields.skills = skills
				.split(',')
				.map((skill) => skill.trim());
		if (bio) profileFields.bio = bio;

		profileFields.social = {};
		if (twitter) profileFields.social.twitter = twitter;
		if (linkedin) profileFields.social.linkedin = linkedin;
		if (facebook) profileFields.social.facebook = facebook;
		if (instagram) profileFields.social.instagram = instagram;

		try {
			let profile = await Profile.findOne({ user: req.user.id });

			if (profile) {
				//Update the existing user
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				);
				return res.json(profile);
			}

			//Create new profile
			profile = new Profile(profileFields);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Private

router.get('/', auth, async (req, res) => {
	try {
		const profile = await Profile.find().populate('user', [
			'name',
			'avatar'
		]);
		res.json(profile);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/profile/user/:user_id
// @desc     Get profiles by user ID
// @access   Private

router.get('/user/:user_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user : req.params.user_id
		}).populate('user', [
			'name',
			'avatar'
		]);
		if (!profile) {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.json(profile);
	} catch (err) {
		console.log(err.message);
		if (err.kind == 'ObjectID') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('Server Error');
	}
});

// @route    DELETE api/profile
// @desc     Delete user and its profile
// @access   Private

router.delete('/', auth, async (req, res) => {
	try {
		//Remove Profile
		await Profile.findOneAndRemove({ user: req.user.id });
		//Remove User
		await Profile.findOneAndRemove({ _id: req.user.id });
		res.json({ msg: 'Profile Deleted' });
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private

router.put(
	'/experience',
	[
		auth,
		[
			check('title', 'Title is required').notEmpty(),
			check('company', 'Company is required').notEmpty(),
			check('from', 'Joining date is required').notEmpty().custom(
				(value, { req }) =>

						req.body.to ? value < req.body.to :
						true
			)
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const profile = await Profile.findOne({ user: req.user.id });
			profile.experience.unshift(req.body);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private

router.delete('/experience/:exp_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		const removeIndex = profile.experience
			.map((item) => item.id)
			.indexOf(req.params.exp_id);
		profile.experience.splice(removeIndex, 1);
		await profile.save();
		return res.json(profile);
	} catch (err) {
		console.error(err.message);
		return res.status(500).json({ msg: 'Server error' });
	}
});

// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private

router.put(
	'/education',
	auth,
	check('school', 'School is required').notEmpty(),
	check('degree', 'Degree is required').notEmpty(),
	check('fieldofstudy', 'Field of study is required').notEmpty(),
	check('from', 'From date is required and needs to be from the past')
		.notEmpty()
		.custom(
			(value, { req }) =>

					req.body.to ? value < req.body.to :
					true
		),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const profile = await Profile.findOne({ user: req.user.id });
			profile.education.unshift(req.body);
			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    DELETE api/profile/education/:edu_id
// @desc     Delete education from profile
// @access   Private

router.delete('/education/:edu_id', auth, async (req, res) => {
	try {
		const foundProfile = await Profile.findOne({ user: req.user.id });
		foundProfile.education = foundProfile.education.filter(
			(edu) => edu._id.toString() !== req.params.edu_id
		);
		await foundProfile.save();
		return res.status(200).json(foundProfile);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ msg: 'Server error' });
	}
});

// @route    DELETE api/profile/leave/:emp_id/:leave_id/:val
// @desc     Mark the leave request as approved or rejected and delete the request
// @access   Private

router.delete('/leave/:emp_id/:leave_id/:val', auth, async (req, res) => {
	const ans =

			req.params.val == 1 ? 'Your leave request is accepted' :
			'Your leave request is rejected';
	const leaveMsg = [];
	try {
		const foundProfile = await Employee.findOne({
			user: req.params.emp_id
		});
		const leaveProfile = foundProfile.leaves.map((leave) => {
			if (leave._id == req.params.leave_id) {
				leaveMsg.push(leave.from);
				leaveMsg.push(leave.to);
				leaveMsg.push(leave.reason);
				leave.status = req.params.val;
			}
		});
		foundProfile.leaves = foundProfile.leaves.filter(
			(leave) => leave._id.toString() !== req.params.leave_id
		);
		await foundProfile.save();
		leaveMsg.push(ans);
		return res.status(200).send(leaveMsg);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
