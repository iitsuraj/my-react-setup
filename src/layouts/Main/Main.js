import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles, useMediaQuery, Container } from "@material-ui/core";
const styles = (theme) => ({
    "@global": {
        "*::-webkit-scrollbar": {
            width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
        },
    },
    root: {
        paddingTop: 64,
        height: "100%",
        [theme.breakpoints.up("sm")]: {
            paddingTop: 72,
        },
    },
    padding: {
        paddingTop: theme.spacing(10),
    },
    shiftContent: {
        [theme.breakpoints.up("sm")]: {
            paddingLeft: 240,
        },
    },
    shiftContentShort: {
        paddingLeft: 70,
    },
    content: {
        height: "100%",
    },
});

export const withMediaQuery = (queries = []) => (Component) => (props) => {
    const mediaProps = {};
    queries.forEach((q) => {
        mediaProps[q[0]] = useMediaQuery(q[1]);
    });
    return <Component {...mediaProps} {...props} />;
};
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.mobileDrawer = this.mobileDrawer.bind(this);
    }
    mobileDrawer() {
        this.setState({ open: !this.state.open });
    }
    render() {
        const { classes, isDesktop, children } = this.props;
        return (
            <div
                className={clsx({
                    [classes.shiftContent]: this.state.open,
                    [classes.shiftContentShort]: !this.state.open && isDesktop,
                })}
            >
                {/*<Topbar open={this.state.open} mobileDrawer={this.mobileDrawer} />*/}
                {/*<Sidebar*/}
                {/*    open={this.state.open}*/}
                {/*    mobileDrawer={this.mobileDrawer}*/}
                {/*    isDesktop={isDesktop}*/}
                {/*/>*/}
                
                <main className={classes.root}>
                    <Container>{children}</Container>
                </main>
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.node,
};

export default withStyles(styles)(
    withMediaQuery([
        [
            "isDesktop",
            (theme) => theme.breakpoints.up("lg"),
            {
                defaultMatches: true,
            },
        ],
    ])(Main)
);