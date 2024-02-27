const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');

const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');

// const bcrypt = require('bcrypt');
// const { User } = require('./models/index');

const prepareAndStartServer = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on ${PORT}`);

        // const password = 'hero123';
        // const user = await User.findByPk(5);
        // const response = bcrypt.compareSync(password, user.password);
        // console.log(response);
    })
}

prepareAndStartServer();