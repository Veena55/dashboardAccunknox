import React from 'react'
import StackedBarChart from './charts/StackedBarChart'
import DoughnutChart from './charts/DoughnutChart'

const Widget = ({ data }) => {
    console.log(data);

    return (
        <div className='bg-white rounded-md p-3 h-[100%]'>
            <h5 className='text-sm font-semibold'>{data.name}</h5>
            {data.charttype == 'dognut' && <DoughnutChart attributes={data.attributes} />}
            {data.charttype == 'stack' && <StackedBarChart attributes={data.attributes} />}
            {/* <StackedBarChart /> */}
        </div>
    )
}

export default Widget