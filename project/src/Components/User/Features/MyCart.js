import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart, clearCart } from '../../../redux/CartSlice'
import { API_PATH } from '../../../util/API_URL'

const MyCart = () => {
    let dispatch = useDispatch();
    let cartData = useSelector(state => state);
    // let [total, setTotal] = useState(0);
    let num = 0;
    cartData.forEach((item)=>{
        num += parseInt(item.price);
    })
    // setTotal(num);
    

    let del = (obj)=>{
        dispatch(removeCart(obj));
    }

    let clear = ()=>{
        dispatch(clearCart())
    }
    return (
        <div className="container my-4" style={{ minHeight: "600px" }}>
            <div className="row">
                <div className='col-md-12'>
                    <h3>Items in Your Cart</h3>
                    {
                        cartData.length > 0
                        ?
                    
                        <div className='row'>
                        <div className='col-md-9'>
                            <h5>All Items</h5>
                            <button onClick={clear} className='btn btn-danger'>Clear Cart</button>
                            <table className="table text-dark table-secondary table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Title</th>
                                        <th>Product Image</th>
                                        <th>Product Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartData.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{item.title}</td>
                                                    <td><img src={`${API_PATH}/product/${item.image}`} style={{height : "70px", width : "70px"}} /></td>
                                                    <td>{parseInt(item.price).toFixed(2)}</td>
                                                    <td align='center'><button onClick={()=>del(item)} className='btn'><i class="bi bi-x"></i></button></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className='col-md-3 bg-dark'>
                            <h4 className='text-light px-3 pt-3'>Amount Detail</h4>
                            <table className='table border border-0'>
                                <tbody>
                                    <tr>
                                        <td>Total Items</td>
                                        <td>{cartData.length}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Amount</td>
                                        <td>{num.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Charges</td>
                                        <td>199.00</td>
                                    </tr>
                                    <tr>
                                        <td>GST(8%)</td>
                                        <td>{ (num*0.08).toFixed(2) }</td>
                                    </tr>
                                    <tr>
                                        <td><h5  className='text-light'>Amount</h5></td>
                                        <td><h5  className='text-light'>{(num+199+(num*0.08)).toFixed(2)}</h5></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                        :
                        <div className='alert alert-danger'>
                            Your Cart Empty !
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MyCart