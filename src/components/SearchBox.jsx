import React from 'react'

const SearchBox = () => {
    return (
        <>
            <div className='bg-slate-100 p-2 rounded-md shadow-sm'>
                <input type="search" className='border-0 bg-transparent focus:outline-0 ::placeholder:text-grey' placeholder='Search Widget ...' />
            </div>
        </>
    )
}

export default SearchBox