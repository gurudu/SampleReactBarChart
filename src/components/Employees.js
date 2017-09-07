import React from 'react';

const Employees = props => {
  let rows = props.employeesData.map((item,index) => {
    return (
       <tbody>
       <tr>
       <th scope="row">{index+1}</th>
        <td>{item.userId}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.jobTitle}</td>
        <td>{item.salary}</td>
        </tr>
       </tbody>
    )
  });

return (
        <table className="table table-responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>User id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Job title</th>
                <th>Salary €/year</th>
              </tr>
            </thead>
            {rows}
       </table>
    );
}
export default Employees;
