const HomologationService = module.exports;
const HomologationRespository = require('../repositories/HomologationRespository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

HomologationService.create = async (homologation) => {
  console.log('creating homologation');

  const homologationToValidate = await this.find(homologation.id);
  console.log(homologationToValidate);
  if(HomologationService) throw ErrorHandler.BaseError('homologation already exists', 409);
  
  return HomologationRespository.create(homologation);
};

HomologationService.find = (homologation) =>{
  console.log('find homologation');

  return HomologationRespository.find(homologation);
};