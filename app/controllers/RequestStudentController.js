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
RequestStudentController.findByStudentId = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const { query: { student_id } } = req;
    const request = await RequestStudentService.findByStudentId(student_id);

    if (request.length === 0) return res.status(204).send(request);

    return res.send(request);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
