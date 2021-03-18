
import { ActionType } from "./actions";

const initialState = {
    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionType.LOGIN_SUCCESS:
        return { ...state, token: payload }

    default:
        return state
    }
}
