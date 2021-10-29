const loginController = require('../controller/logincontroller');
const midd = require('../middlewares/midd');


module.exports = async (app) => {
    app.post('/login',async(req,res) => {
        let user = req.body;
        res.send(await loginController.login(user));
        console.log(await loginController.login(user));
    });
    app.post('/register',async(req,res) => {
        let user = req.body;
        res.send(await loginController.register(user));
    });
    app.post('/addUser',midd.middAutentication,async(req,res) => {
        let user = req.body;
        res.send(await loginController.addUser(user));
    });
    app.get('/users',midd.middAutentication,async(req,res) => {
        res.send(await loginController.listUser());
    });
    app.patch('/updateUser',midd.middAutentication,async(req,res) => {
        let updateuser = req.body;
        res.send(await loginController.updateuser(updateuser));
    });
    app.delete('/deleteUser/:name',midd.middAutentication, async(req,res)=>{
        let userdelete = req.params.user
        res.send(await loginController.deleteUser(userdelete));
    });

};