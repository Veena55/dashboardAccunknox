import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { dashboardSelector, showWidget, toggleWidget } from '../redux/slice/dashboardSlice'

const AddWidget = () => {
    const { data, flag } = useSelector(dashboardSelector);
    const dispatch = useDispatch();
    console.log(data[0].categories[0].name);
    const [categoryName, setCategoryName] = useState('cat1');
    const [active, setActive] = useState(categoryName);
    const [widgetDetails, setWidgetDetails] = useState({ categoryName: categoryName, widgetName: '', isActive: false });
    // Find the specified category
    const category = data[0].categories.find(cat => cat.name === categoryName);

    const handleConfirm = () => {
        if (widgetDetails.widgetName) {
            dispatch(toggleWidget(widgetDetails));
        }
        dispatch(showWidget(false));

    }
    const handleCategory = (cat_name) => {
        setCategoryName(cat_name);
        setWidgetDetails({ categoryName: cat_name, widgetName: '', isActive: false });
        setActive(cat_name);
    }
    const handleCheckboxChange = (widgetName, currentIsActive) => {
        setWidgetDetails({
            categoryName: categoryName,
            widgetName: widgetName,
            isActive: !currentIsActive
        });
    }
    return (
        <div className={`fixed right-0 top-0 backdrop-brightness-50 backdrop-blur-[2px] bottom-0 left-0 z-50 ${!flag && 'hidden'}`}>
            <div className='w-1/2 h-screen float-end bg-white flex flex-col justify-between'>
                <div>
                    <div className='bg-[#14147d] p-3 flex justify-between items-center text-white'>
                        <h5>Add Widget</h5>
                        <button onClick={() => dispatch(showWidget(false))}> <CgClose className='font-medium cursor-pointer' size={20} /></button>
                    </div>
                    <div className='m-2'>
                        <p>Personalise your dashboard by adding the following widget</p>
                        <div className='py-2 inline-flex'>
                            {data[0].categories.map((ele, index) => {
                                return (
                                    <button key={index} className={`border-b-[3px] ${active == ele.name && " border-b-blue-950"} p-3`} onClick={() => handleCategory(ele.name)}>{ele.name}</button>
                                )
                            })}
                        </div>
                        {/* <div className=''></div> */}
                        <div className='overflow-y-auto h-[65vh]'>
                            {category.widgets.map((ele, index) => {
                                return (
                                    <div div className='px-5 py-2' key={index}>
                                        <div className='border p-2 rounded-md'>
                                            <input type="checkbox" checked={widgetDetails.widgetName === ele.name ? widgetDetails.isActive : ele.isActive} onChange={() => handleCheckboxChange(ele.name, widgetDetails.isActive)} />
                                            <label className='mx-3'>{ele.name}</label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Confirm CTA buttons */}
                <div className='flex justify-end gap-3 p-2'>
                    <button className='py-2 px-5 rounded-md bg-transparent text-[#14147d] border-[#14147d] border' onClick={() => dispatch(showWidget(false))}>Cancel</button>
                    {console.log(widgetDetails)}
                    <button className='py-2 px-5 rounded-md text-white bg-[#14147d]' onClick={handleConfirm}>Confrim</button>
                </div>
            </div>
        </div >
    )
}

export default AddWidget