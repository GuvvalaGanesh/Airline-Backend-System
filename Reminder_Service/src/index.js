const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { PORT } = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');

// const cron = require('node-cron');

const setupAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);

        // sendBasicEmail(
        //         'support@admin.com',
        //         'ganeshguvvala4@gmail.com',
        //         'This is the testing email',
        //         'Hiii, how are you?, I hope you like the service'
        // );

        // cron.schedule('*/1 * * * *', () => {
        //     console.log('running a task for every 1 minute');
        // });
    })
}

setupAndStartServer();