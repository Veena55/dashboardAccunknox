import React from 'react'
import LeftMenus from './LeftMenus'
import SearchBox from './SearchBox'
import RightMenus from './RightMenus'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5 bg-white shadow-md sticky top-0'>
            <LeftMenus />
            <SearchBox />
            <RightMenus />
        </div>
    )
}

export default Navbar