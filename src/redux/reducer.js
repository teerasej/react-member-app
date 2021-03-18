import { actions } from "./actions"

const initialState = {
    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.LOGIN_SUCCESS:
        console.log('token:', payload);
        return { ...state, token: payload }

    default:
        return state
    }
}
