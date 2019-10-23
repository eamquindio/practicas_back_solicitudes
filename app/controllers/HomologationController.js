const HomologationController = module.exports;
const HomologationService = require('../services/HomologationService');

HomologationController.save = async (req, res, next) =>{
  const { body } = req;
  try{
    await HomologationService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};