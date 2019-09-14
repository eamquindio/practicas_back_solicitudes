const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const RequestStudentRepository = require('../../app/repositories/RequestStudentRepository');
const Helper = require('../Helper');

const API = '/api/solicitudes-ms/request_student';
chai.use(chaiHttp);

describe('Request Student CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('create request student test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 1,
      date: '13/04/2019',
      society: 'q',
      requester_name: 'q',
      agreement: 'q',
      person_in_charge: 'q',
      how_meet_company: 'q',
      city_id: 1,
      state_id: 1,
      practice_type_id: 1,
      student_id: 1,
      company_id: 1,
    })
    .then(async () => {
      const requestStduentToAssert = await RequestStudentRepository.find(1);
      assert.equal(requestStduentToAssert.id, 1);
    }));

  it('create request student already exists test', async () => {
    await RequestStudentRepository.create({
      id: 1,
      date: '13/04/2019',
      society: 'q',
      requester_name: 'q',
      agreement: 'q',
      person_in_charge: 'q',
      how_meet_company: 'q',
      city_id: 1,
      state_id: 1,
      practice_type_id: 1,
      student_id: 1,
      company_id: 1,
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        date: '13/04/2019',
        society: 'q',
        requester_name: 'q',
        agreement: 'q',
        person_in_charge: 'q',
        how_meet_company: 'q',
        city_id: 1,
        state_id: 1,
        practice_type_id: 1,
        student_id: 1,
        company_id: 1,
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
});
