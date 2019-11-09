const express = require('express');
const PersonController = require('./controllers/PersonController');
const RequestStudentController = require('./controllers/RequestStudentController');
const SearchRequestController = require('./controllers/SearchRequestController');
const HomologationController = require('./controllers/HomologationController');
const RequestCompanyController = require('./controllers/RequestCompanyController');
const ListRequestController = require('./controllers/ListRequestController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);
// Request student
router.post('/request_student', RequestStudentController.save);
router.get('/request_student/find_by_student_id', RequestStudentController.findByStudentId);
// Request_company Routes
router.post('/request_company', RequestCompanyController.save);
router.get('/request_company/:id(\\d+)', RequestCompanyController.find);
// Search Request
router.get('/request/:id(\\d+)', SearchRequestController.find);
router.post('/request', SearchRequestController.save);
// search homologation
router.get('/homologacion/:id(\\d+)', HomologationController.find);
router.post('/homologacion', HomologationController.save);
// Request status
router.put('/request_company/:id(\\d+)', RequestCompanyController.editStatus);
router.put('/request_student/:id(\\d+)', RequestStudentController.editStatus);
//List request
router.get('/request', ListRequestController.listAll);

module.exports = router;
