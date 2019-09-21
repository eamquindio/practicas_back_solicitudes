const RequestCompanyRepository = module.exports;
const DB = require('../utils/DB');

RequestCompanyRepository.create = request => DB('request_company').insert(request).returning('*');
RequestCompanyRepository.find = id => DB('request_company').select('*').where({ id }).first();

