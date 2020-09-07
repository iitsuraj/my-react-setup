import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
    },
    content: {
        height: "100%",
    },
}));

const Minimal = (props) => {
    const { children } = props;

    const classes = useStyles();
    return (
        <div
            className={clsx({
                [classes.root]: true,
            })}
        >
            <main className={classes.content}>{children}</main>
        </div>
    );
};

Minimal.propTypes = {
    children: PropTypes.node,
};

export default Minimal;