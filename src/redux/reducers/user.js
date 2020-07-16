const init_state = {
    username: "",
    login :false
  };
  
  export default (state = init_state, action) => {
    switch (action.type) {
      case "USER_LOGIN":
        // return { ...state, login: true, username: action.payload };
        return { ...state, ...action.payload };
      case "USER_LOGOUT":
        return { ...init_state, login: false };
      default:
        return { ...state };
    }
  };
  