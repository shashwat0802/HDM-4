import React from 'react'
import Sidebar from '../components/Sidebar'

export default function RoadNetwork() {
  return (
    <div>
        <Sidebar/>
        <div className="container d-flex align-items-center flex-column" style={{height:'100%'}}>
        <button type="button" className="btn btn-primary align-self-end my-4">New</button>
    </div>
    </div>
  )
}
