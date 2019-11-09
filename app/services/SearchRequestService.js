const SearchRequestService = module.exports;
const SearchRequestRepository = require('../repositories/SearchRequestRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

SearchRequestService.create = async (request) => {
  console.log('creating request');

  const requestToValidate = await this.find(request.id);
  console.log(requestToValidate);
  if (requestToValidate) throw ErrorHandler.BaseError('request already exists', 409);

  return SearchRequestRepository.create(request);
};

SearchRequestService.find = (request) => {
  console.log('find request');

  return SearchRequestRepository.find(request);
};

