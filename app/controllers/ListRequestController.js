const ListRequestController = module.exports;
const ListRequestService = require('../services/ListRequestService');

ListRequestController.listAll = async (req, res, next) => {
  try {
    const request = await ListRequestService.listAll();
    if (request.length === 0) return res.status(204).send(request);

    return res.send(request);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
