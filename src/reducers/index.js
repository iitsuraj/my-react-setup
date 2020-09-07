import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import appReducer from "./appReducer";
import uiReducer from "./uiReducer";
export default combineReducers({
    // auth: authReducer,
    // app: appReducer,
    ui: uiReducer,
});