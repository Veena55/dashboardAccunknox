import React from 'react'
import Widget from './Widget'
import { useDispatch, useSelector } from 'react-redux';
import { dashboardSelector, showWidget } from '../redux/slice/dashboardSlice';

const Category = () => {
    const dashBoardData = useSelector(dashboardSelector);
    const categories = dashBoardData.data[0].categories;
    const dispatch = useDispatch();
    // console.log(categories[0]);
    return (
        <div className='px-5'>
            {categories.map((item, index) => {
                return (
                    <div key={index} className='py-3'>
                        <h4 className='font-bold'>{item.name}</h4>
                        <div className='grid grid-cols-3 gap-10 items-center justify-center'>
                            {(item.widgets).map((element, index) => {
                                if (element.isActive) {
                                    return (
                                        <Widget key={index} data={element} />
                                    )
                                }
                            })}
                            <div className='bg-white rounded-md h-[100%] flex  justify-center items-center'>
                                <button className='text-sm font-semibold border  border-blue-950 text-blue-950  p-2 rounded-md' onClick={() => dispatch(showWidget(true))}>+ Add Widget</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Category