const initialState = {
    isLoading: false,
};

export const firebaseReducer = (state = initialState, action) => {
    // if(action.type ===)
    // return state

    switch (action.type) {
        case "ON_CHANGE_LOADING":
            return {
                ...state,
                isLoading: action.value,
            };

        default:
            return state;
    }
};

// export default firebaseReducer;
