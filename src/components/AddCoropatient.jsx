import React, { useState } from 'react'
import NavBar from './NavBar'

const AddCoropatient = () => {
    const [data,setData]=useState(
        {
            "location":"",
            "confirmcasesind":"",
            "confirmedcaseforei":"",
            "discharges":"",
            "deaths":""
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control" name='location' value={data.location} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ConfirmedCases in India</label>
                            <input type="text" className="form-control"name='confirmcasesind' value={data.confirmcasesind} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ConfrimedCases Foreign</label>
                            <input type="text" className="form-control" name='confirmedcaseforei' value={data.confirmedcaseforei} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DischargesNo</label>
                            <input type="text" className="form-control" name='discharges' value={data.discharges} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">No Of Deaths</label>
                            <input type="text" className="form-control" name='deaths' value={data.deaths} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCoropatient