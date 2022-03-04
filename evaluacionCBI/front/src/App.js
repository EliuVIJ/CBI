//importar componentes
import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';
import UsersPermisos from './components/UsersPermisos';
import Form from './components/Form';

function App() {

  const [user, setUser] = useState({
    ID_User: 0,
    Nombre: '',
    Apps: '',
    telefono: '',
    Fecha_Alta: ''
  })

  const [users, setUsers] = useState([]);
  const [usersP, setUsersP] = useState([]);

  const [listUpdated, setlistUpdated] = useState(false);

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:8000/users/')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers();
    setlistUpdated(false);
  },[listUpdated])

  useEffect(() => {
    const getUsersP = () => {
      fetch('http://localhost:8000/users/info')
      
      .then(res => res.json())
      //.then(res=>console.log(res))
      .then(res => setUsersP(res))
    }
    getUsersP();
    setlistUpdated(false)
  },[listUpdated])

  return (
    <Fragment>
      <Navbar brand='Usuarios App'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de usuarios</h2>
            <UsersList users={users} setlistUpdated={setlistUpdated}/>
          </div>  
          <div className='col-5'>
            <h2 style={{textAlign: 'center'}}>Nuevo usuario</h2>
            <Form user={user} setUser={setUser}/>
          </div>
          <div className='col-12 pt-5'>
            <h2>Lista de Usuarios y sus respectivos Permisos</h2>  
            <UsersPermisos usersP={usersP} setlistUpdated={setlistUpdated}/>
          </div>
        </div>  
      </div>
    </Fragment>
  );
}

export default App;
