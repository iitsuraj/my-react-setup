export const showSnackbar = (payload) => {
    return (dispatch) => {
        dispatch({ type: "SHOW_SNACKBAR", payload });
    };
};

export const clearSnackbar = () => {
    return (dispatch) => {
        dispatch({ type: "SNACKBAR_CLEAR" });
    };
};