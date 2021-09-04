// payload is whatever we pass to useCreator while dispatching it using dispatcher
export const userCreator = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
