import { GET_PROFILE,  PROFILE_ERR} from '../actions/types';

const initialState = {
    profile : null,
    profiles : [],
    loading :  true,
    error : {}
}

export default function profileReducer( state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}