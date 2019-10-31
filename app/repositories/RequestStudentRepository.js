const RequestStudentRepository = module.exports;
const DB = require('../utils/DB');

RequestStudentRepository.create = requestStudent => DB('request_student').insert(requestStudent).returning('*');

RequestStudentRepository.find = id => DB('request_student').select('*').where({ id }).first();

RequestStudentRepository.findByStudentId = studentId =>
  DB('request_student').select('*').where({ student_id: studentId });

RequestStudentRepository.editStatus = (id, estado) =>
  DB('request_student').update({ estado }).where({ id }).returning('*');

