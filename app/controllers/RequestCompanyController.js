const RequestCompanyController = module.exports;
const RequestCompanyService = require('../services/RequestCompanyService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');


RequestCompanyController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await RequestCompanyService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

RequestCompanyController.find = async (req, res, next) => {
  try {
    const { params: { idrequest } } = req;
    const company = await RequestCompanyService.find(idrequest);

    if (!company) return next(new ErrorHandler.BaseError('request company not exists', 404));

    return res.send(company);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

RequestCompanyController.editStatus = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    console.log({ id });
    const solicitud = await RequestCompanyService.editStatus(id);

    if (!solicitud) return next(new ErrorHandler.BaseError('solicitud not exists', 404));

    return res.send(solicitud);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
