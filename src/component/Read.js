import React, { useState ,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";

const Read = () => {
    const [apidata,setApidata] = useState([])
      const [tabledark, setTableDark] = useState("");

     const navigate = useNavigate(); 
       function getdata() {
         axios
           .get(`https://6427e516161067a83b02dbcf.mockapi.io/Student`)
           .then((res) => {
             setApidata(res.data);
           });
       }

       function Handledelet(id) {
         axios
           .delete(`https://6427e516161067a83b02dbcf.mockapi.io/Student/${id}`)
           .then(() => {
             getdata();
           });
       }
       function setDataTostorage(id, name, email) {
         localStorage.setItem("id", id);
         localStorage.setItem("name", name);
         localStorage.setItem("email", email);
       }

       useEffect(() => {
         getdata();
       }, []);

       const createdata = () => {
         navigate("/");
       };
      return (
    <>
    <div
        className="form-check form-switch mt-3"
        onClick={() => {
          if (tabledark === "table-dark") setTableDark("");
          else setTableDark("table-dark");
        }}
      >
        <input className="form-check-input" type="checkbox" role="switch" />
      </div>
      
      <div className="row">
        <div className="col-md-12">
          <div>
            <Link to="/">
              <button
                type="button"
                className="btn btn-primary mt-5"
                onClick={createdata}
              >
                Create new data
              </button>
            </Link>
          </div>
          <table
            className={`table table-bordered table-striped  table-hover mt-5 ${tabledark} `}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th> <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apidata.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <Link to="/edit">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                              setDataTostorage(
                                item.id,
                                item.e_name,
                                item.e_email
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => Handledelet(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      </>
  );
}

export default Read