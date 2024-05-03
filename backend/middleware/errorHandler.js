const logEvents = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}`, 'error.txt');
    console.log(err.stack)
    res.status(500).send(err.message);
}

module.exports = errorHandler;