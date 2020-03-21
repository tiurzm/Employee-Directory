import React from "react";
import Moment from 'moment';


function Table(props) {
    // console.log(props);
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
    function toDob (dob) {
        const birth = `${dob.date}`;
        const birthday = Moment(birth).format('DD-MM-YYYY');
        return birthday
    }
    return (
        <div className="table-responsive mx-auto">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                        <span onClick={props.handleSortReverse}>
                        &#8595; </span> Name <span 
                            onClick={props.handleSort}>    
                        &#8593; </span>
                    </th>
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
                        <td>{toDob(employee.dob)}</td>
                    </tr>
                ))}
                {/* employee is just a name for the element, you can call it whatever you want */}
            </tbody>
        </table>
        </div>
    );
}

export default Table;
