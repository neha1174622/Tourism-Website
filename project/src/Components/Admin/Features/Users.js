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


  let changeStatus = async (obj)=>{
    // // obj.name = "Demo";
    // // setAllUser(()=>{
    // //   return allUser.map(v=>{
    // //     if(v._id == obj._id)
    // //     {
    // //       return obj;
    // //     }
    // //     else{
    // //       return v;
    // //     }
    // //   })
    // })

    if(obj.status==1){
      let data = { status : 0 }
      let response =await axios.put(`${API_URL}/user/${obj._id}`, data);
      obj.status=0;
      setAllUser(()=>{
        return allUser.map(v=> v._id==obj._id ? obj : v)
      })
      
    }else{
      let data = { status : 1 }
      let response = await axios.put(`${API_URL}/user/${obj._id}`, data);
      obj.status=1;
      setAllUser(()=>{
        return allUser.map(v=> v._id==obj._id ? obj : v)
      })
    }
  }
 
  return (
    <>
      <div className="container my-4" style={{marginTop : "100px", minHeight : "600px"}}>
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
                  <th>Status</th>
                  <th>Change</th>
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
                        <td>{value.status==1 ? 'Enable' : 'Disable'}</td>
                        <td><button onClick={()=>changeStatus(value)} className='btn btn-info btn-sm'>Change</button></td>
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