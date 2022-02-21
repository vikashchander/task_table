import React from "react";

function NewUser() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#newUserModal"
      >
        ADD New USER
      </button>
    </>
  );
}

export default NewUser;
