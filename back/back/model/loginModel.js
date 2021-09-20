const sequelize = require('../db/conexion');

module.exports = class loginsModel {
    constructor(login){
        this.login = login
    }
   
    async find (user){
        let result = await sequelize.query("SELECT [user],[password],email,[name] FROM users WHERE [user] = '"+user.user+"' AND [password] = '"+user.password+"'");
        
        if(user.user == result[0][0].user){
            
            return result[0][0]
        }else{
            return false
        }
        
    }
}