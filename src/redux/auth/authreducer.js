export const actionTypes = {
    USER_LOADING: "[auth] USER_LOADING",
    SET_CURRENT_USER: "[auth] SET_CURRENT_USER",
    ATTACHED_ACCOUNTS: "[auth] ATTACHED_ACCOUNTS",
    ERROR: "[auth] GET_ERRORS",
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
}

// actionTypes
export const actions = {
    setCurrentUser(decoded) {
        return {
            type: actionTypes.SET_CURRENT_USER,
            payload: decoded
        };
    },
    setUserLoading() {
        return {
            type: actionTypes.USER_LOADING,
        };
    },
    getError(data) {
        return {
            type: actionTypes.ERROR,
            payload: data
        }
    }
};

// Reducer
const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {
    },
    loading: false,
    errors: false,
    success: false,
    error: {
        username: null,
        password: null
    }

};


export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return { ...state, isAuthenticated: !isEmpty(action.payload), user: action.payload };
        case actionTypes.USER_LOADING:
            return { ...state, loading: true };
        case actionTypes.ERROR:
            return { ...state, errors: true };
        case actionTypes.LOGIN_SUCCESS:
            {
                return {
                    ...initialState,
                    success: true
                };
            }
        case actionTypes.LOGIN_ERROR:
            {
                return {
                    success: false,
                    error: action.payload
                };
            }
        default:
            return state;
    }
};