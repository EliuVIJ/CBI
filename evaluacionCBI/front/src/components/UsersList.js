import React from "react";

const UsersList = ({users, setlistUpdated}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:8000/users/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setlistUpdated(true)
    }


    return ( 
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apps</th>
                    <th>Telefono</th>
                </tr>
            </thead>    
            <tbody>
                {users.map(user => (
                    <tr key={user.ID_User}>
                        <td>{user.ID_User}</td>
                        <td>{user.Nombre}</td>
                        <td>{user.telefono}</td>
                        <td>{user.Apps}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(user.ID_User)} className="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
     );
}
 
export default UsersList;