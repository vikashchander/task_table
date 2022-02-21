import USER from "../constants";
import dataJSON from '../../data.json';
import { v4 as uuidv4 } from 'uuid';
const initalState = {
  usersData: dataJSON,
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case USER.LOAD_SUCCESS:
      return {
        ...state,
        usersData: action.usersData,
        isLoading: false,
      };
      case USER.USER_EDIT:
        const edit = action.payload;
        let newUserData = state.usersData;
        let foundEdit= newUserData.findIndex(({id})=> id === edit.id)
         newUserData.splice(foundEdit,1,edit);
          return{
              ...state,
              usersData: newUserData,
          };
      case USER.USER_DELETE:
        console.log(action,state.usersData)
          return{
              ...state,
              usersData:state.usersData.filter(({id})=> id !== action.payload)
          };
      case USER.USER_ADD:
         const val = uuidv4(); 
         let  newUser = action.payload;
         newUser.id = val;
        state.usersData.unshift(newUser);
          return{
              ...state,
              usersData:state.usersData,
          };
    default:
      return state;
  }
};

export default reducer;