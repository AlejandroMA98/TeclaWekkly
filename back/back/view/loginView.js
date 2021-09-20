const loginController = require('../controller/logincontroller')

module.exports = async (app) => {
    app.post('/login',async(req,res) => {
        let user = req.body;
       
        res.send(await loginController.login(user));
    });
    app.post('/addUser',async(req,res) => {
        let user = req.body;
        res.send(await loginController.addUser(user));
    });
    app.get('/users',async(req,res) => {
        res.send(await loginController.listUser());
    });
    app.delete('/deleteUser/:user', async(req,res)=>{
        let userdelete = req.params.user
        res.send(await loginController.deleteUser(userdelete));
    });

};