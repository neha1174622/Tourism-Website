import React, {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import DestinationBox from '../Shared/DestinationBox'

const Destination = () => {
 

  let params = useParams();
  let [allDestination, setAllDestination] = useState([]);
  useEffect(()=>{

    axios.get(`${API_URL}/destination/category/${params.x}`).then(response=>{
      setAllDestination(response.data);
    })

  },[params])

  return (
    <>
    
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
            <h2>Destination Page</h2>
        <div className="row">
            

						{
							allDestination.map(value => {
								return (
									<DestinationBox value={value} />
								)
							})
						}


					</div>
        </div>
    
    </>
  )
}

export default Destination
/*
  useEffect(()=>{

    for every effect

  })

  useEffect(()=>{

    only on page load

  },[])

  useEffect(()=>{

    only when a varibale has been changed

  },[variable, variable])

*/