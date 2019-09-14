const RequestStudentController = module.exports;
const RequestStudentService = require('../services/RequestStudentService');

RequestStudentController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await RequestStudentService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
