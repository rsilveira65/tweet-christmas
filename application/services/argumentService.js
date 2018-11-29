/**
 * Node Modules
 */
const commandLineArgs = require('command-line-args');

/*
 * Handles input arguments.
 */
const handleInputs = () => {
    const optionDefinitions = [
        { name: 'verbose', alias: 'v', type: Boolean },
        { name: 'word', alias: 'w', type: String },
        { name: 'language', alias: 'l', type: String },
        { name: 'sleep', alias: 's', type: Number }
    ];

    return commandLineArgs(optionDefinitions);
};

module.exports = { handleInputs };