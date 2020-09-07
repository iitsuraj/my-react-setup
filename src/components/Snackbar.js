import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { clearSnackbar } from "../actions/snackbarAction";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function SuccessSnackbar() {
    const dispatch = useDispatch();

    const { message, type, SnackbarOpen } = useSelector((state) => state.ui);

    function handleClose() {
        dispatch(clearSnackbar());
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={SnackbarOpen}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={type}>
                {message}
            </Alert>
        </Snackbar>
    );
}