import React from 'react'
import { BiPlus, BiRefresh } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const DashboardMenu = () => {
    return (
        <div className='flex justify-evenly gap-5 text-blue-950'>
            <button className='flex items-center gap-1 bg-white p-2 rounded-md'>Add Widget <BiPlus /></button>
            <button className='bg-white p-2 rounded-md'><BiRefresh /></button>
            <button className='bg-white p-2 rounded-md'><BsThreeDotsVertical /></button>
        </div>
    )
}

export default DashboardMenu