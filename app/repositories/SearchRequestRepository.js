const SearchRequestRepository = module.exports;
const DB = require('../utils/DB');

SearchRequestRepository.create = request => DB('request').insert(request).returning('*');

SearchRequestRepository.find = id => DB('request').select('*').where({ id }).first();
