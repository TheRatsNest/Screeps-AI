var ControlRoom = require('controlRoom');

var spawner = {};

spawner.getEnergyAvailable = function(){
    return this.room.energyAvailable;
}

spawner.getMaxEnergy = function(){
    return this.room.energyCapacityAvailable;
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
    this.memory.population.max.maxers = 0;
    this.memory.population.max.noblemen = 0;
    this.memory.population.max.repairmen = 0;
    this.memory.population.max.transporters = 0;
    this.memory.population.max.upgraders = 0;
    this.memory.population.max.warriors = 0;
}

spawner.setPopulation = function(){
    if()
}