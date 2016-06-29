//loading creep roles | total : 10
var CreepArcher = require('creepArcher');
var CreepBuilder = require('creepBuilder');
var CreepCarrier = require('creepCarrier');
var CreepGuardian = require('creepGuardian');
var CreepHarvester = require('creepHarvester');
var CreepMiner = require('creepMiner');
var CreepNobleman = require('creepNobleman');
var CreepRepairman = require('creepRepairman');
var CreepTransporter = require('creepTransporter');
var CreepUpgrader = require('creepUpgrader');
var CreepWarrior = require('creepWarrior');

//loading structure roles | total : 2
var structureTower = require('StructureTower');
var structureLink = require('StructureLink');

//loading control files | total : 2
var ControlSpawner = require('controlSpawner');
var ControlConstruction = require('controlConstruction');
var ControlSpawner = require('controlSpawner');

var main = {};

main.getCreeps = function(){
    return Game['creeps'];
};

main.getRooms = function(){
    return Game['rooms'];
};

main.loopRoles = function(creep) {
    if (creep.memory.idle && creep.memory.idle > 0) {
        creep.memory.idle = creep.memory.idle - 1;
        return
    }
    
    switch (creep.memory.role) {
        case 'remove':
            // Remove this creep from our control (basically when creep is dead or is not ours)
            break;
        case 'unknown':
            // Make sure to assign new role
            break;
        case 'archer':
            // Execute Archer code
            break;
        case 'builder':
            // Execute Archer code
            break;
        case 'carrier':
            // Execute Archer code
            break;
        case 'guardian':
            // Execute Archer code
            break;
        case 'miner':
            // Execute Archer code
            break;
        case 'nobleman':
            // Execute Archer code
            break;
        case 'repairman':
            // Execute Archer code
            break;
        case 'transporter':
            // Execute Archer code
            break;
        case 'upgrader':
            // Execute Archer code
            break;
        case 'warrior':
            // Execute Archer code
            break;
        default:
            // WHAT TO DO WITH DEFAULTZZZZZZ!!!??!
    }
};

main.loopCreeps = function(){
    var creeps = main.getCreeps();
    for (let i in creeps){
        var creep = creeps[creepName];
        main.loopRoles(creep);
    }
};

main.loopTowers = function(room){
    /*var towers = ControlRoom.getTowers(); //WIP -> controlRoom
    for (let i in towers){
        //wip
    }*/
};

main.loopRooms = function(){
    var rooms = main.getRooms();
    for(let i in rooms){
        /*
        var room = rooms[roomName];
        var spawn = room.getSpawn() //WIP -> controlRoom
        ControlSpawner();
        main.loopTowers();
        */
    }
};

main.loopRooms();
main.loopCreeps();

/**
  * Options for the script
  * @type {{clearMemory: boolean}} When true the script will try to remove memory on startup
  */
var options = {
        clearMemory: false
};

/**
* Set up function for the script, should run once every time the script is initialized.
*/
main.setup = function() {
    if (options && options.clearMemory) {
        let delMem = function (subset) {
                let counter = 0;
                for (var x in Memory[subset]) {
                    if (!Game[subset][x]) {
                        counter++;
                        delete Memory[subset][x];
                    }
                }
                return counter;
            },
            memories = _(['constructionSites', 'creeps', 'flags', 'rooms', 'spawns', 'structures']), // The types of memory to remove
            removed = memories.reduce(function (result, val) {
                return result + delMem(val);
            });

        // Show in console how many memory entries were removed
        console.log('removed ' + removed + 'entries from memory');
    }

    //TODO continue setup
};

/**
* Loop function of the script, should run once every tick.
*/
main.loop = function() {
    PathFinder.use(true);
    //TODO create loop function
};
// Set up the code for the first time. (might run multiple times)
main.setup();
// Main code, will loop every tick.
module.exports.loop = function () {
    main.loop();
};