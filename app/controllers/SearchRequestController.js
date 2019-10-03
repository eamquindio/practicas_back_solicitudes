const SearchRequestController = module.exports;
const SearchRequestService = require('../services/SearchRequestService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

SearchRequestController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await SearchRequestService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

SearchRequestController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const request = await SearchRequestService.find(id);

    if (!request) return next(new ErrorHandler.BaseError('request not exists', 404));

    return res.send(request);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
