import React from "react";
import "./Task3.css";

const Task3 = (props) => {
  let textLi = React.createRef();
  const showTask3 = () => {
    textLi.current = props.employees.map((elem) => {
      return elem.name;
    });
  };

  return (
    <div>
      <div className="container mtb-3">
        <table className="table">
          <thead>
            {props.employees.map((elem) => {
              <tbody>
                <tr>
                  <td>{elem.name[0]}</td>
                  <td>{elem.surname}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Name</td>
                </tr>
              </tbody>;
            })}
            <th>Name</th>
            <th>Surname</th>
            <th>days</th>
            <th>days</th>
            <th>SalaryPerDay</th>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Task3;
