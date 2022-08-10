let roleMiner = require('role.miner');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
const { creepSignal } = require('./nervous-system');







creepSignal("miner")
module.exports.loop = function () {

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        


        var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner')
        if (numberOfMiners !== nervSys.minerNum) {
            nervSys.creepSignal('miner')
        }
    }


};