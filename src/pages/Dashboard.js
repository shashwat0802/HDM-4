import React , {useState} from 'react'
import ClimateData from '../components/ClimateData'
import Sidebar from '../components/Sidebar'

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
    </div>
  )
}
