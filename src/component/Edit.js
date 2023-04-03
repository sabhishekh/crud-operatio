import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  });

  function handleupdate(e) {
    e.preventDefault();
    axios
      .put(`https://6427e516161067a83b02dbcf.mockapi.io/Student/${id}`, {
        e_name: name,
        e_email: email,
      })
      .then(() => {
        navigate("/Read");
      });
  }
  return (
    <>
      <h2>Update</h2>
      <form onSubmit={handleupdate}>
        <div className="mb-3">
          <Link to="/edit">
            <button type="button" className="btn btn-info mt-5">
              Update data
            </button>
          </Link>
        </div>
        <div classNameName="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 mt-4">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </>
  );
};

export default Edit;