import React from 'react';
import '.././styles/App.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SalaryBarChart = props => {
  return (
     <div className="barchart">
    	<BarChart width={600} height={300} data={props.employeesData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="userId"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="salary" fill="#66CD00" />
      </BarChart>
      </div>
    );
}
export default SalaryBarChart;
