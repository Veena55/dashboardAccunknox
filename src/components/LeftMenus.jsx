import React from 'react'
import { PiGreaterThan } from 'react-icons/pi'

const LeftMenus = () => {
    return (
        <>
            <div className='flex items-center gap-1'>
                <a href="#">Home</a>
                <PiGreaterThan />
                <a href='#'>Dashboard</a>
            </div>
        </>
    )
}

export default LeftMenus