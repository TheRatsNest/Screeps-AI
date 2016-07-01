var ControlRoom = require('controlRoom');
var Main = require('main');

var spawner = {};

spawner.getEnergyAvailable = function(){
    return this.room.energyAvailable;
}

spawner.getMaxEnergy = function(){
    return this.room.energyCapacityAvailable;
}

spawner.getCreeps = function(){
    return this.room['creeps'];
}

spawner.getSpawn = function(){
    return this.room.spawns;
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

spawner.loopDeadCreeps = function(){
    for(let i in Memory.creeps){
        if(!Game.creeps[i]){
            delete Memory.creeps[i];
            console.log('Performing CR on creep: '+i);
        }
    }
}

spawner.loopCreeps = function(){
    var creeps = spawner.getCreeps;
    for(let i in creeps){
        var creep = creeps[i];
        spawner.checkPopulation(i);
    }
}

spawner.checkPopulation = function(index){
    if(this.room.memory.population[index] < this.room.memory.population.min[index]){
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
    } else if(this.room.memory.population[index] < this.room.memory.population.max[index]){
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

spawner.spawnCreep = function(blueprint, role){
    var spawn = spawner.getSpawn();
    Game.spawns.spawn.createCreep(blueprint, undefined,     {role:role, home:this.room);
}

spawner.spawning = function(){
    let spawning = false;
    for (let i in Game.spawns){
        let spawn = Game.spawns[i];
        if(spawn.spawning){
            spawning = true;
        }
        if(Game.time % 10 == 0){
            if(!spawning){
                if(spawner.getEnergyAvailable >= spawner.getMaxEnergy){
                    spawner.loopCreeps();
                    switch(this.room.memory.populationStatus){
                        case 'ERR_NOT_ENOUGH_ARCHERS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'archer');
                            break;
                        case 'ERR_NOT_ENOUGH_BUILDERS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'builder');
                            break;
                        case 'ERR_NOT_ENOUGH_CARRIERS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'carrier');
                            break;
                        case 'ERR_NOT_ENOUGH_GUARDIANS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'guardian');
                            break;
                        case 'ERR_NOT_ENOUGH_MINERS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'miner');
                            break;
                        case 'ERR_NOT_ENOUGH_NOBLEMEN':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'nobleman');
                            break;
                        case 'ERR_NOT_ENOUGH_REPAIRMEN':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'repairman');
                            break;
                        case 'ERR_NOT_ENOUGH_TRANSPORTERS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'transporter');
                            break;
                        case 'ERR_NOT_ENOUGH_UPGRADERS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'upgrader');
                            break;
                        case 'ERR_NOT_ENOUGH_WARRIORS':
                            let blueprint = //TODO create blueprint function in creepArcher
                            spawner.spawnCreep(blueprint, 'warrior');
                            break;
                    }
                }
            }
        }
        if(!spawning){
            if(Game.time % 50 == 0){
                spawner.loopDeadCreeps();
            }
        }
    }
}