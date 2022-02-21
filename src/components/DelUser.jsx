import React from "react";
import { deleteUser} from "../state/action-creators/action";
import {useDispatch } from "react-redux";
function DelUser(props){
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="btn btn-danger p-1"
        onClick={() => dispatch(deleteUser(props.id))}
      >
        delete
      </button>
    </>
  );
}

export default DelUser;
