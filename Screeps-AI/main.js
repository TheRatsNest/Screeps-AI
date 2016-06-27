//loading creep roles | total : 10
var CreepArcher = require('creepArcher');
var CreepBuilder = require('creepBuilder');
var CreepCarrier = require('creepCarrrier');
var Creepguardian = require('creepGuardian');
var CreepHarverster = require('creepHarverster');
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
var ControlRoom = require('controlRoom');

var main = {};

//Use this to clear old memory
/*for(var i in Memory.creeps) {
    if(Game.creeps[i]){
        delete Memory.creeps[i]
    }
}*/

main.getCreeps = function(){
    return Game['creeps'];
}

main.getRooms = function(){
    return Game['rooms'];
}

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
        Creepguardian();
    }
    if (creep.memory.role == 'harverster'){
        CreepHarverster();
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
}

main.loopCreeps = function(){
    var creeps = main.getCreeps();
    for (let i in creeps){
        var creep = creeps[creepName];
        main.loopRoles(creep);
    }
}

main.loopTowers = function(room){
    var towers = ControlRoom.getTowers(); //WIP -> controlRoom
    for (let i in towers){
        //wip
    }
}

main.loopRooms = function(){
    var rooms = main.getRooms();
    for(let i in rooms){
        var room = rooms[roomName];
        var spawn = room.getSpawn() //WIP -> controlRoom
        ControlSpawner();
        main.loopTowers();
    }
}

main.loopRooms();
main.loopCreeps();