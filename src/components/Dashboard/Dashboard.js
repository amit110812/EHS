import React from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import ChartBar from '../Chart/ChartBar'
import Pie from '../Chart/PieChart'

const Dashboard = () => {
  return (
    <div>
    <div className='d-flex dashboard-screen-main'>
        <div className='sidebar-section'>
<Sidebar/>
        </div>
        <div className='dashboard-section'>
<div className='d-flex'>


    <div className='dash-tab tab-1'>
        <p className='mb-0'>Your Actions : </p>
        <p className='mb-0'>Your review : </p>
        <p className='mb-0'>Your review : </p>
    </div>
    <div className='dash-tab tab-2'>tab2</div>
    
    <div className='dash-tab tab-3'>tab3</div>
    <div className='dash-tab tab-4'>tab4</div>
    
</div>
<div className='insights-table'>
    Table for insights
</div>
<div className='chartmain'>
      <div className='chart-1'><ChartBar/></div>
      <div className='chart-2 ms-5'><Pie/></div>
      </div>
        </div>

        
    </div>
    

    </div>
  )
}

export default Dashboard