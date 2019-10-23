const HomologationRespository = module.exports;
const DB = require('../utils/DB');

HomologationRespository.create = homologation => DB('homologation').insert(homologation).returning('*');
HomologationRespository.find = id => DB('homologation').select('*').where({ id }).first();