//loading creep roles | total : 10
var CreepArcher = require('./Creeps/creepArcher');
var CreepBuilder = require('./Creeps/creepBuilder');
var CreepCarrier = require('./Creeps/creepCarrier');
var CreepGuardian = require('./Creeps/creepGuardian');
var CreepHarvester = require('./Creeps/creepHarvester');
var CreepMiner = require('./Creeps/creepMiner');
var CreepNobleman = require('./Creeps/creepNobleman');
var CreepRepairman = require('./Creeps/creepRepairman');
var CreepTransporter = require('./Creeps/creepTransporter');
var CreepUpgrader = require('./Creeps/creepUpgrader');
var CreepWarrior = require('./Creeps/creepWarrior');

//loading structure roles | total : 2
var structureTower = require('./Structure/StructureTower');
var structureLink = require('./Structure/StructureLink');

//loading control files | total : 2
var ControlSpawner = require('./Control/controlSpawner');
var ControlConstruction = require('./Control/controlConstruction');
var ControlSpawner = require('./Control/controlSpawner');

var main = {};

main.getCreeps = function(){
    return Game['creeps'];
};

main.getRooms = function(){
    return Game['rooms'];
};

main.loopRoles = function(creep) {
    if (creeps.memory.role === 'archer'){
        CreepArcher();
    }
    if (creep.memory.role == 'builder'){
        CreepBuilder();
    }
    if (creep.memory.role == 'carrier'){
        CreepCarrier();
    }
    if (creep.memory.role == 'guardian'){
        CreepGuardian();
    }
    if (creep.memory.role == 'harverster'){
        CreepHarvester();
    }
    if (creep.memory.role == 'miner'){
        CreepMiner();
    }
    if (creep.memory.role == 'nobleman'){
        CreepNobleman();
    }
    if (creep.memory.role == 'repairman'){
        CreepRepairman();
    }
    if (creep.memory.role == 'transporter'){
        CreepTransporter();
    }
    if (creep.memory.role == 'upgrader'){
        CreepUpgrader();
    }
    if (creep.memory.role == 'warrior'){
        CreepWarrior();
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
        var room = rooms[roomName];
        var spawn = room.getSpawn() //WIP -> controlRoom
        ControlSpawner();
        main.loopTowers();
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
    //TODO create loop function
};
// Set up the code for the first time. (might run multiple times)
main.setup();
// Main code, will loop every tick.
    module.exports.loop = function () {
        main.loop();
    };