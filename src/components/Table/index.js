import React from "react";

function Table(props) {
    console.log(props);
    // function for name's array(it returns only first and last name)
    function toName(name) {
        return `${name.first} ${name.last}`;
    }
    // function for id's array(it returns only the value of SSN)
    function forKey(id) {
        return `${id.value}`
    }
    return (
        // <table className="table table-striped">
        //     <thead>
        //         <tr>
        //             <th scope="col">Image</th>
        //             <th scope="col">Name</th>
        //             <th scope="col">Phone</th>
        //             <th scope="col">Email</th>
        //             <th scope="col">DOB</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <th scope="row">1</th>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             <td>@jkk</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">2</th>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             <td>@bbb</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">3</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@twitter</td>
        //             <td>@tnt</td>

        //         </tr>
        //         <tr>
        //             <th scope="row">4</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@lol</td>
        //             <td>@dsa</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">5</th>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             <td>@jkk</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">6</th>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             <td>@bbb</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">7</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@twitter</td>
        //             <td>@tnt</td>

        //         </tr>
        //         <tr>
        //             <th scope="row">8</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@lol</td>
        //             <td>@dsa</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">9</th>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             <td>@jkk</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">10</th>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             <td>@bbb</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">11</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@twitter</td>
        //             <td>@tnt</td>

        //         </tr>
        //         <tr>
        //             <th scope="row">12</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@lol</td>
        //             <td>@dsa</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">13</th>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             <td>@jkk</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">14</th>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             <td>@bbb</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">15</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@twitter</td>
        //             <td>@tnt</td>

        //         </tr>
        //         <tr>
        //             <th scope="row">16</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@lol</td>
        //             <td>@dsa</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">17</th>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             <td>@jkk</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">18</th>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             <td>@bbb</td>
        //         </tr>
        //         <tr>
        //             <th scope="row">19</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@twitter</td>
        //             <td>@tnt</td>

        //         </tr>
        //         <tr>
        //             <th scope="row">20</th>
        //             <td>Larry</td>
        //             <td>the Bird</td>
        //             <td>@lol</td>
        //             <td>@dsa</td>
        //         </tr>
        //     </tbody>
        // </table>
        <>
        <ul className="list-group employee">
            {props.employees.map(employee => (
<li className="list-group-item" key={forKey(employee.id)}>{toName(employee.name)} {employee.phone} {employee.email}</li>
            ))}
            {/* employee is just a name for the element, you can call it whatever you want */}
        </ul>
        {/* <ul className="list-group employee">
            {props.employees.map(function(employee) {
                return (<li className="list-group-item">{toName(employee.name)}</li>)
            })}
        </ul> */}
        
        </>
    );
}

export default Table;
