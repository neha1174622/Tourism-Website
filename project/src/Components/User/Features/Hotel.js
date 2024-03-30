import React, {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import HotelBox from '../Shared/HotelBox'

const Hotel = () => {
 

    let [allHotel, setAllHotel] = useState([]);
	useEffect(() => {
		axios.get(`${API_URL}/hotel`).then(response => {
			setAllHotel(response.data);
		})
	}, [])


  return (
    <>
    
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
            <h2>Hotel Page</h2>
        <div className="row">
            

						{
							allHotel.map(value => {
								return (
									<HotelBox value={value} />
								)
							})
						}


					</div>
        </div>
    
    </>
  )
}

export default Hotel
