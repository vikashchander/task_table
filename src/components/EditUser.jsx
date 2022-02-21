import React from "react";

function EditUser(props) {
  function handleEdit(e, data) {
    e.preventDefault();
    props.edit({ ...data });
    console.log(data);
  }
  return (
    <>
      <button
        type="button"
        class="btn btn-primary p-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={(e) => handleEdit(e, props.user)}
      >
        Edit
      </button>
    </>
  );
}

export default EditUser;
