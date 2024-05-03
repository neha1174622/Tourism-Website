import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {

  let navigate = useNavigate();
    let x = useRef();
    let btn = useRef();

    let [pro, setPro] = useState({});
    let [allPro, setAllPro] = useState([]);

    useEffect(()=>{
      axios.get(`${API_URL}/product`).then(response=>{

          setAllPro(response.data);
      })
  },[])

  let askDelete = (obj)=>{
    setPro(obj);
}

let confirmDelete = ()=>{
    axios.delete(`${API_URL}/product/${pro._id}`).then(response=>{
        btn.current.click();
        setAllPro(()=>{
            return allPro.filter(value=> value._id != pro._id)
        })
    })
}

let askEdit = (obj)=>{
  navigate("/admin/product/edit/"+obj._id)
}


  return (
    <div className="container my-4">
    <div className="row">
        <div className="col-md-12">
            <h3>Add New Prodcut</h3>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Prodcut</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPro.map((value, index)=>{
                            return(
                                <tr key={value._id}>
                                    <td>{index+1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.price}</td>
                                    <td><button onClick={()=>askEdit(value)} className='btn btn-info btn-sm'>Edit</button></td>
                                    <td><button onClick={()=>askDelete(value)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>

        <div className='modal fade' id='delModal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Delete Product</h3>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure want to delete <b>{pro.title}</b></p>
                    </div>
                    <div className="modal-footer">
                        <button ref={btn} data-dismiss="modal" className='btn btn-dark'>Close</button>
                        <button onClick={confirmDelete} className='btn btn-danger'>Delete</button>
                    </div>
                </div>
            </div>
        </div>



</div>
  )
}

export default ProductList