const initialState = {
    message: "",
    type: "warning",
    SnackbarOpen: false,
};
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_SNACKBAR":
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type,
                SnackbarOpen: true,
            };
        case "SNACKBAR_CLEAR":
            return {
                ...state,
                message: "",
                SnackbarOpen: false,
            };
        default:
            return state;
    }
};

export default uiReducer;