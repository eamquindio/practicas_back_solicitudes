const express = require('express');
const PersonController = require('./controllers/PersonController');
const RequestStudentController = require('./controllers/RequestStudentController');
const SearchRequestController = require('./controllers/SearchRequestController');


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

// Search Request
router.get('/request/:id(\\d+)', SearchRequestController.find);
router.post('/request', SearchRequestController.save);

module.exports = router;
