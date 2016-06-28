/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('commandHarvest');
 * mod.thing == 'a thing'; // true
 */

/**
 *
 * @param creep Creep
 * @param inventory controlInventory
 */
module.exports = function (creep, target) {
    let result = creep.harvest(target);
    switch (result) {
        case 0: // OK
            return true;
        case -1: // ERR_NOT_OWNER
            creep.memory.role = 'remove';
            return false;
        case -4: // ERR_BUSY
            return false;
        case -5: // ERR_NOT_FOUND
            creep.memory.role = 'unknown';
            return false;
        case -6: // ERR_NOT_ENOUGH_RESOURCES
            creep.memory.idle = target.ticksToRegeneration;
            return false;
        case -7: // ERR_INVALID_TARGET
            return false;
        case -9: // ERR_NOT_IN_RANGE
            creep.moveTo(target);
            return false;
        case -12: // ERR_NO_BODYPART
            creep.memory.role = 'unknown';
            return false;
        default:
            return false;
    }
};