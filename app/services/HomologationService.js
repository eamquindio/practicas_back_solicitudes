const HomologationService = module.exports;
const HomologationRespository = require('../repositories/HomologationRespository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

HomologationService.create = async (body) => {
  console.log('creating homologation');
  const homologationToValidate = await this.find(body.id);
  console.log(homologationToValidate);
  if (homologationToValidate) throw ErrorHandler.BaseError('homologation already exists', 409);

  return HomologationRespository.create(body);
};

HomologationService.find = (homologation) => {
  console.log('find homologation');

  return HomologationRespository.find(homologation);
};
