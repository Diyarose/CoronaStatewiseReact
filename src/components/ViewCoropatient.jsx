import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewCoropatient = () => {
    const [data,changeData]=useState(
        {
            data: {regional:[]}
        }
    )
    const fetchData=()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Location</th>
                                    <th scope="col">ConfirmedCases India</th>
                                    <th scope="col">ConfirmedCases Foreign</th>
                                    <th scope="col">Discharges</th>
                                    <th scope="col">Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.data.regional.map(
                                (value,index)=>{
                                   return  <tr>
                                   <th scope="row">{value.loc}</th>
                                   <td>{value.confirmedCasesIndian}</td>
                                   <td>{value.confirmedCasesForeign}</td>
                                   <td>{value.discharged}</td>
                                   <td>{value.deaths}</td>
                               </tr> 
                                }
                               )}
                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCoropatient