import USER from "../constants";
import dataJSON from '../../data.json'

export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await data;
    console.log(json);
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: json,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};

export const deleteUser = (index) =>(dispatch) => {
    dispatch({
       type: USER.USER_DELETE,
       payload: index
    })
 }

 export const editUser = (data) =>(dispatch)=>{
   dispatch({
     type:USER.USER_EDIT,
     payload:data
   })
 }