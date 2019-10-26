const RequestCompanyService = module.exports;
const RequestCompanyRepository = require('../repositories/RequestCompanyRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

RequestCompanyService.create = async (request) => {
  console.log('creating requets company');

  const companyToValidate = await RequestCompanyRepository.find(request.id);
  console.log(companyToValidate);
  if (companyToValidate) throw ErrorHandler.BaseError('the company request already exists', 409);

  return RequestCompanyRepository.create(request);
};

RequestCompanyService.find = (request) => {
  console.log('find request company');

  return RequestCompanyRepository.find(request);
};

RequestCompanyService.editStatus = (id) => {
  console.log('edit status convocatoria');

  return RequestCompanyRepository.editStatus(id, 'cancelada');
};
