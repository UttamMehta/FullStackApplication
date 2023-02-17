/** @format */
const initialState = {
  user: {},
  appoint: {},
  appointuser: {},
  logindetail: {},
  isAuth: false,
  token:"",
};

//complete the reducer function
const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    state.user = action.work;
  }
  if (action.type === 'ADDcalendar') {
    state.appoint =action.appo;
    state.appointuser = action.work;
    state.appoint.time = action.time;
    // state.time = action.time;
  }
  if (action.type === 'login') {
    state.logindetail = action.work;
    state.isAuth = true;
  }
  if(action.type==="Adduser"){
    state.token=action.token;
    state.user=action.user;
  }
  if(action.type==="logout"){
    state.token="";
    state.user="";
  }
  // if (action.type === 'logout') {
  //   state.isAuth = action.isAuth;
  // }
  return { ...state };
};

export { reducer };
