// import isEmpty from "../validations/is-empty.js";
//
// import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../actions/types";
//
// const initialState = {
//     isAuthenticated: false,
//     user: {},
// };
//
// export default function (state = initialState, action) {
//     switch (action.type) {
//         case SET_CURRENT_USER:
//             return {
//                 ...state,
//                 isAuthenticated: !isEmpty(action.payload),
//                 user: action.payload,
//             };
//         case CLEAR_CURRENT_USER:
//             return {
//                 ...state,
//                 isAuthenticated: false,
//                 user: null,
//             };
//         case "UPDATE_USER_FIRST_TIME":
//             return {
//                 ...state,
//                 user: {
//                     ...state.user,
//                     first_time: false,
//                 },
//             };
//         default:
//             return state;
//     }
// }