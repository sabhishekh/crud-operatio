import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Create = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate()
    function handlesubmit(e){
        e.preventDefault()
       axios.post("https://6427e516161067a83b02dbcf.mockapi.io/Student",{
        e_name:name,
        e_email:email
       }).then(()=>{
        navigate('/read')
       });
    }
  return (
    <>
      <h2>Create</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <Link to="/read">
            <button type="button" className="btn btn-info mt-5">
              Read data
            </button>
          </Link>
        </div>
        <div classNameName="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-4">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
       

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default Create