const mongoose = require('mongoose');

//mongoose connection
const dbURI = 'mongodb+srv://bhargav4110:bhargav4110@cluster0.oxvzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
    dbName: 'mangaDB',
    userNewUrlParser: true,
    userUnifiedTopology: true
});

//monitor successful connection
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

//checks for connection error
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ', err);
});

//monitors disconnection event
mongoose.connection.on('disconnected', () =>{
    console.log('mongoose Disconnected.')
});

//funvtion called when an termination event accurs like closing app or nodemon restart
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`mongoose Discoonected through ${msg}`);
        callback();
    });
};

//for modemon, sends a message to gracefulShutdown function and callback kill process
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//for application termination, sends a message to gracefulShutdown function and callback exit Node process
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

//for heroku shutdown, sends a message to gracefulShutdown function and callback exit Node process
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./manga');