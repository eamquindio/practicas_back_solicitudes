const RequestStudentService = module.exports;
const RequestStudentRepository = require('../repositories/RequestStudentRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

RequestStudentService.create = async (request) => {
  console.log('creating request_student');

  const requestStudents = await RequestStudentRepository.find(request.id);
  console.log(requestStudents);
  if (requestStudents) throw ErrorHandler.BaseError('requestStudents already exists', 409);

  return RequestStudentRepository.create(request);
};

// eslint-disable-next-line camelcase
RequestStudentService.findByStudentId = (student_id) => {
  console.log('findByStudentId request student');

  return RequestStudentRepository.findByStudentId(student_id);
};
