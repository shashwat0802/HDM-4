import React , {useState} from 'react'
import ClimateData from '../components/ClimateData'
import Sidebar from '../components/Sidebar'
import SpeedFlowType from '../components/SpeedFlowType'
import TrafficFlowPattern from '../components/TrafficFlowPattern'
import RoadNetwork from '../components/RoadNetwork'

export default function Dashboard() {
  const [tab , setTabs] = useState(0)
  const switchTabs = (number) => {
    setTabs(number)
  }
  return (
    <div style={{height:'90vh'}}>
        <Sidebar switchTabs={switchTabs}/>
        {tab === 0 && (
          <ClimateData/>
        )}
        {tab === 1 && (
          <SpeedFlowType/>
        )}
        {tab === 2 && (
          <TrafficFlowPattern/>
        )}
        {tab === 3 && (
          <RoadNetwork/>
        )}
    </div>
  )
}
