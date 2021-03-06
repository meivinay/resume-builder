let initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  degree: "",
  college: "",
  cgpa: "",
  year: "",
  isPublic: false,
  skills:[],
  summary:""
};

let detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default detailsReducer;
