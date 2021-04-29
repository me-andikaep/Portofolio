const initialState = {
    isLoading: false,
    projectList: null,
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

        case "ON_SET_PROJECT_LIST":
            return {
                ...state,
                projectList: action.value,
            };

        default:
            return state;
    }
};

// export default firebaseReducer;
