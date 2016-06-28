var ControlRoom = require('controlRoom');

var spawner = {};

spawner.getEnergyAvailable = function(){
    return this.room.energyAvailable;
}

spawner.getMaxEnergy = function(){
    return this.room.energyCapacityAvailable;
}

spawner.setBodyPartsCost = function(){
    this.memory.population.bodyPartsCost.bodyMove = 50;
    this.memory.population.bodyPartsCost.bodyWork = 100;
    this.memory.population.bodyPartsCost.bodyCarry = 50;
    this.memory.population.bodyPartsCost.bodyAttack = 80;
    this.memory.population.bodyPartsCost.bodyRangedAttack = 150;
    this.memory.population.bodyPartsCost.bodyHeal = 250;
    this.memory.population.bodyPartsCost.bodyClaim = 600;
    this.memory.population.bodyPartsCost.bodyTough = 10;
}

spawner.setMemory = function(){
    this.memory.population.archers = 0;
    this.memory.population.builders = 0;
    this.memory.population.carriers = 0;
    this.memory.population.guardians = 0;
    this.memory.population.miners = 0;
    this.memory.population.noblemen = 0;
    this.memory.population.repairmen = 0;
    this.memory.population.transporters = 0;
    this.memory.population.upgraders = 0;
    this.memory.population.warriors = 0;
    
    this.memory.population.min.archers = 0;
    this.memory.population.min.builders = 0;
    this.memory.population.min.carriers = 0;
    this.memory.population.min.guardians = 0;
    this.memory.population.min.miners = 0;
    this.memory.population.min.noblemen = 0;
    this.memory.population.min.transporters = 0;
    this.memory.population.min.upgraders = 0;
    this.memory.population.min.warriors = 0;
    
    this.memory.population.max.archers = 0;
    this.memory.population.max.builders = 0;
    this.memory.population.max.carriers = 0;
    this.memory.population.max.guardians = 0;
    this.memory.population.max.miners = 0;
    this.memory.population.max.noblemen = 0;
    this.memory.population.max.repairmen = 0;
    this.memory.population.max.transporters = 0;
    this.memory.population.max.upgraders = 0;
    this.memory.population.max.warriors = 0;
}

spawner.checkPopulation = function(populationCount,index){
    if(populationCount < this.room.memory.population.min[index]){
        switch(index){
            case 'archers':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_ARCHERS';
                break;
            case 'builders':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_BUILDERS';
                break;
            case 'carriers':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_CARRIERS';
                break;
            case 'guardians':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_GUARDIANS';
                break;
            case 'miners':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_MINERS';
                break;
            case 'noblemen':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_NOBLEMEN';
                break;
            case 'repairmen':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_REPAIRMEN';
                break;
            case 'transporters':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_TRANSPORTERS';
                break;
            case 'upgraders':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_UPGRADERS';
                break;
            case 'warriors':
                this.room.memory.populationStatus = 'ERR_NOT_ENOUGH_WARRIORS';
                break;
        }
    }
}