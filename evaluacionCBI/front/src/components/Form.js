import React from "react";

const Form = ({user, setUser}) => {

    const handleChange = e => {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })
    }
    //Desestructuración
    let{ID_User,Nombre,Apps,telefono,Fecha_Alta} = user

    const handleSubmit = () => {
        ID_User = parseInt(ID_User, 10);
        if(ID_User <= 0 || Nombre === '' || Apps === '' || telefono === '' || Fecha_Alta === ''){
            alert('Todos los campos deben estar llenos')
            return
        }

        const requestInit = {
            method: 'POST',
            //headers: {'Content-Type':'aplication/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:8000/users/', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //Reiniciando valores
        setUser({
            ID_User: 0,
            Nombre: '',
            Apps: '',
            telefono: '',
            Fecha_Alta: ''
        })
    }
    //Formulario
    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="id_user" className="form-label">Id</label>
                <input value={ID_User} name="ID_User" onChange={handleChange} type="number" id="id_user" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input value={Nombre} name="Nombre" onChange={handleChange} type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apps" className="form-label">Apps</label>
                <input value={Apps} name="Apps" onChange={handleChange} type="text" id="apps" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cell" className="form-label">Telefono</label>
                <input value={telefono} name="telefono" onChange={handleChange} type="text" id="cell" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha de Alta</label>
                <input value={Fecha_Alta} name="Fecha_Alta" onChange={handleChange} type="date" id="fecha" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
     );
}
 
export default Form;