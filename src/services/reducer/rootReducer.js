import { combineReducers } from "redux";
import getCoinNameReducer from "./coinNameReducer";

export const reducers = combineReducers({
  selectedCoin: getCoinNameReducer,
});
