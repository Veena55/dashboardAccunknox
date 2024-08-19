import React from 'react'
import DashboardMenu from './DashboardMenu'

const DashboardHeader = () => {
    return (
        <div className='flex justify-between p-5'>
            <h3 className='font-bold flex items-center'>CNAPP Dashboard</h3>
            <DashboardMenu />
        </div>
    )
}

export default DashboardHeader