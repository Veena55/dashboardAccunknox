import React from 'react'
import Navbar from '../components/Navbar'
import DashboardHeader from '../components/DashboardHeader'
import Category from '../components/Category'
import AddWidget from '../components/AddWidget'

const Dashboard = () => {
    return (
        <div className='bg-[#f0f5fa]'>
            <Navbar />
            <DashboardHeader />
            <div className='flex gap-5 flex-col pb-5'>
                <Category />
            </div>
            <AddWidget />
        </div>
    )
}

export default Dashboard