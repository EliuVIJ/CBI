import React from "react";

const UsersPermisos = ({usersP, setlistUpdated}) => {
    
    return ( 
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apps</th>
                    <th>Telefono</th>
                    <th>FechaAlta</th>
                    <th>Observaciones</th>
                    <th>Sucursal</th>
                    <th>Cargo</th>
                </tr>
            </thead>    
            <tbody>
                {usersP.map(user => (
                    <tr key={user.fila}>
                        <th>{user.fila}</th>
                        <th>{user.Nombre}</th>
                        <th>{user.Apps}</th>
                        <th>{user.telefono}</th>
                        <th>{user.Fecha_Alta}</th>
                        <th>{user.Observaciones}</th>
                        <th>{user.Sucursal}</th>
                        <th>{user.Cargo}</th>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default UsersPermisos;