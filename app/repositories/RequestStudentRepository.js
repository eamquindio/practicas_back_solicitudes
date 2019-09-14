const RequestStudentRepository = module.exports;
const DB = require('../utils/DB');

RequestStudentRepository.create = requestStudent => DB('request_student').insert(requestStudent).returning('*');

RequestStudentRepository.find = id => DB('request_student').select('*').where({ id }).first();
