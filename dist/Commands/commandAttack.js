var CommandMove = require('commandMove')

/**
 * Command to let a creep attack a target
 * @param creep {Creep} The creep that is expected to attack
 * @param target {Creep|Structure} The creep or structure that should be attacked by the creep
 * @param ranged {boolean}
 * @returns {boolean|number} Success or error number, See scheme below for explanation
 * If {true}:                           Command succeeded
 * If {-1|ERR_NOT_OWNER}:               Creep is not yours and ready for removal from our system (role changed to 'remove')
 * If {-4|ERR_BUSY}:                    Creep is busy, advised to retry another tick
 * If {-7|ERR_INVALID_TARGET}:          Target was not valid, please provide an updated one next run
 * If {-9|ERR_NOT_IN_RANGE}:            The target was not in range of the creep and it will try to move towards the target
 * If {-12|ERR_NO_BODYPART}:            The creep misses the body part to do this command (role changed to 'unknown')
 * If {false}:                          Something unexpected happens, please send help?
 */
function commandAttack(creep, target, ranged) {
    let result = -99;
    if (ranged) {
        result = creep.rangedAttack(target);
    } else if(!ranged) {
        result = creep.attack(target);
    }
    switch (result) {
        case 0: // OK
            return true;
        case -1: // ERR_NOT_OWNER
            creep.memory.role = 'remove';
            return -1;
        case -9: // ERR_NOT_IN_RANGE
            CommandMove(creep, target);
            return -9;
        case -12: // ERR_NO_BODYPART
            creep.memory.role = 'unknown';
            return -12;
        case -4: // ERR_BUSY
        case -7: // ERR_INVALID_TARGET
            return result;
        default:
            return false;
    }
}

module.exports = commandAttack;