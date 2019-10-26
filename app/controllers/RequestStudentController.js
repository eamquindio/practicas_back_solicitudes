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
    const { query: { student_id: studentId } } = req;
    const request = await RequestStudentService.findByStudentId(studentId);

    if (request.length === 0) return res.status(204).send(request);

    return res.send(request);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
RequestStudentController.editStatus = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    console.log({ id });
    const solicitud = await RequestStudentService.editStatus(id);

    if (!solicitud) return next(new ErrorHandler.BaseError('solicitud not exists', 404));

    return res.send(solicitud);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
