import React, { useState } from 'react'
import NavBar from './NavBar'

const DeleteCoropatient = () => {
    const [data,setData]=useState(
        {
            "location":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" className="form-control" name='location' value={data.location} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                    <button className="btn btn-primary" onClick={readValue}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteCoropatient