const HomologationController = module.exports;
const HomologationService = require('../services/HomologationService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

HomologationController.save = async (req, res, next) => {
  const { body } = req;
  try {
    console.log(body);
    await HomologationService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

HomologationController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const homologation = await HomologationService.find(id);

    if (!homologation) return next(new ErrorHandler.BaseError('homologation not exists', 404));

    return res.send(homologation);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
