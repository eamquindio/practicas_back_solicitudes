const HomologationRespository = module.exports;
const DB = require('../utils/DB');

HomologationRespository.create = homologation => DB('homologacion').insert(homologation).returning('*');

HomologationRespository.find = id => DB('homologacion').select('*').where({ id }).first();
