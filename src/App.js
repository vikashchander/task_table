import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, editUser, addUser } from "./state/action-creators/action";

import "./App.css";

const App = () => {
  const [data, setData] = useState({});
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { usersData, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();
  console.log(usersData);
  function handleEdit(e, data) {
    e.preventDefault();
    setData({ ...data });
    console.log(data);
  }

  function handlenewUserData(e) {
    e.preventDefault();
    const val = e.target.value;
    setNewUser({
      ...newUser,
      [e.target.name]: val,
    });
    console.log(newUser);
  }

  return (
    <>
      <div className="container">
        {isLoading && <div className="loading">Data loading...</div>}
        <h2> Users Data tables</h2>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#newUserModal"
        >
          ADD New USER
        </button>
        <div
          class="modal fade"
          id="newUserModal"
          tabIndex="-1"
          aria-labelledby="newUserModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="newUserModalLabel">
                  ADD New USER
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <input
                    className="p-2 m-1"
                    name="name"
                    type="text"
                   
                    placeholder="Enter Name "
                    value={newUser.name}
                    onChange={(e) => handlenewUserData(e)}
                  />
                  <input
                    className="p-2 m-1"
                    name="email"
                    type="text"
                  
                    placeholder="Enter Email Add."
                    value={newUser.email}
                    onChange={(e) => handlenewUserData(e)}
                  />
                  <input
                    className="p-2 m-1"
                    name="phone"
                    type="text"
                    placeholder="Enter Contact No."
                    value={newUser.phone}
                    onChange={(e) => handlenewUserData(e)}
                  />
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#newUserModal"
                  onClick={() => {
                 
                    const res = newUser;
                    setNewUser({ name: "", email: "", phone: ""});
                    dispatch(addUser(res));
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* edit modal */}
        <div
          class="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  EDIT
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div>
                  {console.log(data)}
                  {Object.keys(data).map((d) => {
                    return (
                      d !== "id" && (
                        <input
                          className="p-1 m-1"
                          type="text"
                          key={data[d]}
                          defaultValue={data[d]}
                          onBlur={(e) =>
                            setData((prev) => ({
                              ...prev,
                              [d]: e.target.value,
                            }))
                          }
                        />
                      )
                    );
                  })}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    dispatch(editUser(data));
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="p-2 m-2">Name</th>
              <th className="p-2 m-2">Email Id</th>
              <th className="p-2 m-2">Contact_No</th>
              <th className="p-2 m-2">Edit</th>
              <th className="p-2 m-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map(({ name, id, email, phone }) => {
              return (
                <tr key={id}>
                  <td className="p-2 m-2">{name}</td>
                  <td className="p-2 m-2">{email}</td>
                  <td className="p-2 m-2">{phone}</td>
                  <td className="p-2 m-2">
                    <button
                      type="button"
                      class="btn btn-primary p-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => handleEdit(e, { name, id, email, phone })}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger p-1"
                      onClick={() => dispatch(deleteUser(id))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
