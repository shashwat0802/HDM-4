import React , {useState} from 'react'
import ClimateData from '../components/ClimateData'
import Sidebar from '../components/Sidebar'
import SpeedFlowType from '../components/SpeedFlowType'

export default function Dashboard() {
  const [tab , setTabs] = useState(0)
  const switchTabs = (number) => {
    setTabs(number)
  }
  return (
    <div>
        <Sidebar switchTabs={switchTabs}/>
        {tab === 0 && (
          <ClimateData/>
        )}
        {tab == 1 && (
          <SpeedFlowType/>
        )}
    </div>
  )
}
