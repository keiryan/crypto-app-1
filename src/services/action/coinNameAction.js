import { GET_COIN_NAME } from "../reducer/coinNameReducer";

export const getCoinName = (name) => {
  // console.log("you clicked me just now");
  return {
    type: GET_COIN_NAME,
    payload: name,
  };
};
