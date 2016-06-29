var CommandMove = require('commandMove')

/**
 * Command to let a creep claim a target
 * @param creep {Creep} The creep that is expected to harvest
 * @param target {Controller} The controller that should be claimed by the creep
 * @returns {boolean|number} Success or error number, See scheme below for explanation
 * If {true}:                           Command succeeded
 * If {-1|ERR_NOT_OWNER}:               Creep is not yours and ready for removal from our system (role changed to 'remove')
 * If {-4|ERR_BUSY}:                    Creep is busy, advised to retry another tick
 * If {-7|ERR_INVALID_TARGET}:          Target was not valid, please provide an updated one next run
 * If {-8|ERR_FULL}:                    Cannot claim more than 3 rooms in the novice area
 * If {-9|ERR_NOT_IN_RANGE}:            The target was not in range of the creep and it will try to move towards the target
 * If {-12|ERR_NO_BODYPART}:            The creep misses the body part to do this command (role changed to 'unknown')
 * If {-15|ERR_GCL_NOT_ENOUGH}:         Global control level isn't high enough to claim this controller
 * If {false}:                          Something unexpected happens, please send help?
 */
function commandClaim(creep, target) {
    let result = creep.claimController(target);
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
        case -8: // ERR_FULL
        case -15: // ERR_GCL_NOT_ENOUGH
            return result;
        default:
            return false;
    }
}

module.exports = commandClaim;