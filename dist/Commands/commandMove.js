/**
 * Command to let a creep move towards a target
 * @param creep {Creep} The creep that is expected to move
 * @param target {Creep|ConstructionSite|Structure|Flag|RoomPosition} The location to move towards
 * @returns {boolean|number} Success or error number, See scheme below for explanation
 * If {true}:                           Command succeeded
 * If {-1|ERR_NOT_OWNER}:               Creep is not yours and ready for removal from our system (role changed to 'remove')
 * If {-2|ERR_NO_PATH}:                 There was no path to traverse
 * If {-4|ERR_BUSY}:                    Creep is busy, advised to retry another tick
 * If {-7|ERR_INVALID_TARGET}:          Target was not valid, please provide an updated one next run
 * If {-11|ERR_TIRED}:                  The creep had a fatigue > 0 which made him not able to move
 * If {-12|ERR_NO_BODYPART}:            The creep misses the body part to do this command (role changed to 'unknown')
 * If {false}:                          Something unexpected happens, please send help?
 */
function commandMove(creep, target) {
    let result = creep.moveTo(target);
    switch (result) {
        case 0: // OK
            return true;
        case -1: // ERR_NOT_OWNER
            creep.memory.role = 'remove';
            return -1;
        case -2: // ERR_NO_PATH
            return -2;
        case -4: // ERR_BUSY
            return -4;
        case -7: // ERR_INVALID_TARGET
            return -7;
        case -11: // ERR_TIRED
            return -11;
        case -12: // ERR_NO_BODYPART
            creep.memory.role = 'unknown';
            return -12;
        default:
            return false;
    }
}

module.exports = commandBuild;