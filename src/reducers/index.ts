import { combineReducers } from "redux";
import componentsReducer from "./componentsReducer";
import alertsReducer from "./alertsReducer";

export * from './componentsReducer'
export * from './alertsReducer'

export default combineReducers({
    comp: componentsReducer,
    alerts: alertsReducer
});
