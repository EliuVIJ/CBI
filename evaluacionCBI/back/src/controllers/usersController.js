const connection = require("express-myconnection");

const controller = {};

controller.loggin = (req, res) => {
    const user = req.body.username;
    const passd = req.body.password;
    console.log(user, passd)
    try {
        req.getConnection ((err, conn) => {
            conn.query('SELECT * FROM login WHERE user = ? AND passwd = ? ', [user, passd], (err, rows) =>{
               res.json (rows);
            });
        })
    } catch (error) {
        console.log(error)
    }
 }

//obtener todos los usuarios
controller.list = (req,res) => {
    try {
        req.getConnection((err,conn) =>{
            conn.query('SELECT * FROM Users', (err, rows) =>{
                res.json (rows);
            });
        });
    }catch (error){
        res.json( {message: error.message} );
    }
};
//Obtener permisos, usuarios y nombre de permisos
controller.info = (req,res) => {
    try {
        req.getConnection((err,conn) =>{
            conn.query('SELECT ROW_NUMBER() OVER(ORDER BY (select null)) AS fila, u.Nombre,u.Apps,u.telefono,u.Fecha_Alta, pa.Cargo,pa.Sucursal,p.Observaciones FROM Users u, Permisos p, Pmisos_Asig pa WHERE u.ID_User=pa.ID_User AND p.ID_Permiso=pa.ID_Permiso', (err, rows) =>{
                res.json (rows);
            });
        });
    }catch (error){
        res.json( {message: error.message} );
    }
};

//Obterner un usuario
controller.listUser = (req,res) => {
    const {id} = req.params;
    try {
        req.getConnection((err,conn) =>{
            conn.query('SELECT * FROM Users WHERE ID_User = ?', [id], (err, rows) =>{
                res.json (rows);
            });
        });
    }catch(error) {
        res.json( {message: error.message} );
    }
};

//Guardar Usuario
controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    try{
        req.getConnection ((err, conn) => {
            conn.query('INSERT INTO Users set ?', [data], (err, rows) =>{
                res.send('se guardó');
            });
        });
    }catch(error){
        res.json( {message: error.message} );
    }
}

//Borrar Usuario
controller.delete = (req, res) => {
   const {id} = req.params;
    try{
        req.getConnection ((err, conn) => {
            conn.query('DELETE FROM Users WHERE ID_User = ?', [id], (err, rows) =>{
                res.send('se eliminó');
            });
        })
    } catch(error){
        res.json( {message: error.message} );
    }
}
//Borrar todos los datos del usuario
controller.deleteUsersD = (req, res) => {
    const {id} = req.params;
     try{
         req.getConnection ((err, conn) => {
             conn.query('DELETE FROM Users u, Pmisos_Asig pa WHERE u.ID_User = pa.ID_User AND u.ID_User = ?', [id], (err, rows) =>{
                 res.send('se eliminó');
             });
         })
     } catch(error){
         res.json( {message: error.message} );
     }
 }

//Editar Usuario
controller.edit = (req, res) =>{
    const {id} = req.params;
    console.log(id)
    const data = req.body;
    console.log(data);
    try{
        req.getConnection ((err, conn) => {
            conn.query('UPDATE Users set ? WHERE ID_User = ?', [data, id], (err, rows) =>{
                res.send('se modificó');
            });
        })
    }catch(error) {
        res.json( {message: error.message} );
    }
}

module.exports = controller; //exportar el controlador