import React, { useState } from "react";
import "./Task3.css";

const Task3 = (props) => {
  let [dirol, setDirol] = useState(
    props.employees.map((elem) => ({ ...elem }))
  );

  let inputValue = (elem, index) => {
    let { name, value } = elem.target;
    let newList = [...dirol];
    newList[index][name] = value;
    setDirol(newList);
  };
  return (
    <div>
      <div className="container mtb-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Days</th>
              <th>Salary per day</th>
              <th>Result</th>
            </tr>
          </thead>
          {props.employees.map((elem, index) => (
            <tbody>
              <tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.surname}</td>
                <td>
                  <input
                    name="days"
                    value={dirol[index].days}
                    onChange={(e) => inputValue(e, index)}
                    type="text"
                  />
                </td>
                <td>
                  <input
                    name="salaryPerDay"
                    value={dirol[index].salaryPerDay}
                    onChange={(e) => inputValue(e, index)}
                    type="text"
                  />
                </td>
                <td>{dirol[index].days * dirol[index].salaryPerDay}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Task3;
