/**
 * Command to let a creep harvest a target
 * @param creep Creep The creep that is expected to harvest
 * @param target Source The source that should be mined by the creep
 * @returns {boolean|number}
 * If {true}:   Command succeeded
 * If {-1}:     Creep is not yours and ready for removal (role changed to 'remove')
 * If {-4}:     Creep is busy, advised to retry another tick
 * If {-5}:     Extractor could not be found (role changed to 'unknown')
 * If {-6}:     The source did not have resources left (wait until creep.memory.idle is over)
 * If {-7}:     Target was not valid, please provide an updated one next run
 * If {-9}:     The target was not in range of the creep and it will try to move towards the target
 * If {-12}:    The creep misses the body part to do this command (role changed to 'unknown')
 * If {false}:  Something unexpected happens, please send help?
 */
function commandHarvest(creep, target) {
    let result = creep.harvest(target);
    switch (result) {
        case 0: // OK
            return true;
        case -1: // ERR_NOT_OWNER
            creep.memory.role = 'remove';
            return -1;
        case -4: // ERR_BUSY
            return -4;
        case -5: // ERR_NOT_FOUND
            creep.memory.role = 'unknown';
            return -5;
        case -6: // ERR_NOT_ENOUGH_RESOURCES
            creep.memory.idle = target.ticksToRegeneration
            return -6;
        case -7: // ERR_INVALID_TARGET
            return -7;
        case -9: // ERR_NOT_IN_RANGE
            creep.moveTo(target);
            return -9;
        case -12: // ERR_NO_BODYPART
            creep.memory.role = 'unknown';
            return -12;
        default:
            return false;
    }
}

module.exports = commandHarvest;