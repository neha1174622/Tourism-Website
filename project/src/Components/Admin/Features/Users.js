import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'

const Users = () => {

  let [allUser, setAllUser] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/user`).then(response=>{
      setAllUser(response.data);
    })
  },[])
 
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12">
            <h3 className='text-center'>List of All Users</h3>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                </tr>

              </thead>
              <tbody>
                {
                  allUser.map((value, index)=>{
                    return(
                      <tr key={value._id}>
                        <td>{index+1}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.contact}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
 
    </>
  )
}

export default Users