import React, { Component } from 'react';
import '.././styles/App.css';
import Employees from './Employees';
import SalaryBarChart from './SalaryBarChart';
import data from '.././data/employees.json';
const employeesData = data.employees;

class DataComponent extends Component {
  render() {
    return (
      <div className="container">
       <Employees employeesData={employeesData} />
       <SalaryBarChart employeesData={employeesData} />
      </div>
    );
  }
}
export default DataComponent;
