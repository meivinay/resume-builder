// action get its value from store , store get its value from dispatch, we give object to dispatch
// intially state is null
let userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload; // set state to action.payload
    default:
      return state;
  }
};

export default userReducer;
