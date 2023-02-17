/** @format */

export const add = (dispatch, work) => {
  // console.log(work, 'swf');
  dispatch({
    type: 'ADD',
    work: work,
  });
};
export const add2 = (dispatch, work2, appo, time) => {
  // console.log(work, 'swf');
  dispatch({
    type: 'ADDcalendar',
    work: work2,
    appo: appo,
    time: time,
  });
};

export const add3 = (dispatch, {token,user}) => {
  // console.log(work, 'swf');
  dispatch({
    type: 'Adduser',
    token,
    user,
  });
};

export const add4 = (dispatch, payload) => {
  // console.log(work, 'swf');
  dispatch({
    type: 'logout'
  });
};


export const Authaction = (dispatch, detail) => {
  // console.log(work, 'swf');
  dispatch({
    type: 'login',
    work: detail,
    isAuth: true,
  });
};


// export const Authactionout = (dispatch) => {
//   // console.log(work, 'swf');
//   dispatch({
//     type: 'logout',
//     isAuth: false,
//   });
// };
