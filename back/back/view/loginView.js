const loginController = require('../controller/logincontroller')

module.exports = async (app) => {
    app.post('/login',async(req,res) => {
        let user = req.body;
       
        res.send(await loginController.login(user));
    });
};