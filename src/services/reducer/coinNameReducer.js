export const GET_COIN_NAME = "GET_COIN_NAME";

const getCoinNameReducer = (state = null, action) => {
  switch (action.type) {
    case GET_COIN_NAME:
      return action.payload;
    default:
      return state;
  }
};
export default getCoinNameReducer;
