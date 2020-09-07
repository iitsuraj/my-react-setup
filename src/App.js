import React from "react";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Routes from "./Routes";
import store from "./store";
import SnackBar from "./components/Snackbar";
const browserHistory = createBrowserHistory();
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // console.log(error, errorInfo);
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return <></>;
        }

        return this.props.children;
    }
}

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ErrorBoundary>
                        <SnackBar />
                        <Router history={browserHistory}>
                            <Routes />
                        </Router>
                    </ErrorBoundary>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;