const { PORT } = require('./config/serverConfig');
const express = require('express');
const app = express();

const prepareAndStartServer = () => {
    
    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
    })
}

prepareAndStartServer();