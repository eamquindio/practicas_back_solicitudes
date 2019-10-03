const RequestStudentRepository = module.exports;
const DB = require('../utils/DB');

RequestStudentRepository.create = requestStudent => DB('request_student').insert(requestStudent).returning('*');

RequestStudentRepository.find = id => DB('request_student').select('*').where({ id }).first();

// eslint-disable-next-line camelcase
RequestStudentRepository.findByStudentId = student_id => DB('request_student').select('*').where({ student_id });
