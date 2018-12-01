/**
 * Node Modules
 */
const gpio = require('rpi-gpio');
const gpiop = gpio.promise;
require('dotenv').config();

/**
 * Local Modules
 */
const logService = require('../log/logService');

const blink = async (pin, err) => {
    gpiop.setup(pin, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(pin, true);
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(pin, false);
            }, 1000);
        })
        .catch((err) => {
            logService.logError(err.toString());
        })
};

module.exports = { blink };
