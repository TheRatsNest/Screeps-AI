//loading creep files
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

//loading control files
var ControlSpawner = require('controlSpawner');
var ControlConstruction = require('controlconstruction');

var main = {};

//Use this to clear old memory
/*for(var i in Memory.creeps) {
    if(!Game.creeps[i]){
        delete Memory.creeps[i]
    }
}*/

