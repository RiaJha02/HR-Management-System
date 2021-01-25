import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERR } from './types';

//Get current user
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:5000/api/profile/me');
		dispatch({
			type    : GET_PROFILE,
			payload : res.data
		});
	} catch (err) {
		dispatch({
			type    : PROFILE_ERR,
			payload : {
				msg    : err.response.statusText,
				status : err.response.status
			}
		});
	}
};

// Create or update the profile
export const createProfile = (formData, history, edit = false) => async (
	dispatch
) => {
	try {
		const res = await axios.post(
			'http://localhost:5000/api/profile',
			formData
		);

		dispatch({
			type    : GET_PROFILE,
			payload : res.data
		});

		dispatch(
			setAlert(

					edit ? 'Profile Updated' :
					'Profile Created',
				'success'
			)
		);

		if (!edit) {
			history.push('/hr');
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type    : PROFILE_ERR,
			payload : {
				msg    : err.response.statusText,
				status : err.response.status
			}
		});
	}
};
