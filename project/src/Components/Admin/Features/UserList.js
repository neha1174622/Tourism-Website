
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'


const UserList = () => {
    //let navigate = useNavigate();
    let [allUser, setAllUser] = useState([]);

    useEffect(()=>{ // getting data from signup api which has data with user.
        axios.get(`${API_URL}/signup`).then(response=>{
            setAllUser(response.data);
        })
    },[])

    
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>State</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.state}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
export default UserList