import React from "react";
import Moment from 'moment';


function Table(props) {
    console.log(props);
    // function for name's array (it returns only first and last name)
    function toName(name) {
        return `${name.first} ${name.last}`;
    }
    // function for id's array (it returns only the value of SSN)
    function toKey(id) {
        return `${id.value}`
    }
    // function for picture's array
    function toImage(picture) {
        return `${picture.large}`
    }

    // function for dob's array
    function toAge (dob) {
        const birth = `${dob.date}`;
        const birthday = Moment(birth).format('DD-MM-YYYY');
        return birthday
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr key={toKey(employee.id)}>
                        <td><img alt="employee" src={toImage(employee.picture)}/></td>
                        <td>{toName(employee.name)}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{toAge(employee.dob)}</td>
                    </tr>
                ))}
                {/* employee is just a name for the element, you can call it whatever you want */}
            </tbody>
        </table>
    );
}

export default Table;
