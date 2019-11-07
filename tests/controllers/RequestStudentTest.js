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
      date: '',
      society: '',
      requester_name: '',
      agreement: '',
      person_in_charge: '',
      how_meet_company: 'q',
      city_id: 1,
      state_id: 1,
      practice_type_id: 1,
      student_id: 1,
      company_id: 1,
      NIT: '1',
    })
    .then(async () => {
      const requestStduentToAssert = await RequestStudentRepository.find(1);
      assert.equal(requestStduentToAssert.id, 1);
    }));

  it('create request student already exists test', async () => {
    await RequestStudentRepository.create({
      id: 1,
      date: '',
      society: '',
      requester_name: '',
      agreement: '',
      person_in_charge: '',
      how_meet_company: 'q',
      city_id: 1,
      state_id: 1,
      practice_type_id: 1,
      student_id: 1,
      company_id: 1,
      NIT: '1',
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        date: '',
        society: '',
        requester_name: '',
        agreement: '',
        person_in_charge: '',
        how_meet_company: 'q',
        city_id: 1,
        state_id: 1,
        practice_type_id: 1,
        student_id: 1,
        company_id: 1,
        NIT: '1',
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });

  it('find request student by student id test', async () => {
    await RequestStudentRepository.create([{
      id: 1,
      date: '',
      society: '',
      requester_name: '',
      agreement: '',
      person_in_charge: '',
      how_meet_company: 'q',
      city_id: 1,
      state_id: 1,
      practice_type_id: 1,
      student_id: 1,
      company_id: 1,
      NIT: '1',
    }, {
      id: 2,
      date: '',
      society: '',
      requester_name: '',
      agreement: '',
      person_in_charge: '',
      how_meet_company: 'q',
      city_id: 1,
      state_id: 1,
      practice_type_id: 1,
      student_id: 1,
      company_id: 1,
      NIT: '1',
    }]);

    return chai
      .request(app)
      .get(`${API}/find_by_student_id?student_id=1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body[0], {
          id: 1,
          date: '',
          society: '',
          requester_name: '',
          agreement: '',
          person_in_charge: '',
          how_meet_company: 'q',
          city_id: 1,
          state_id: 1,
          practice_type_id: 1,
          student_id: 1,
          company_id: 1,
          NIT: '1',
        });
      });
  });

  it('find person by student id empty test', async () => chai
    .request(app)
    .get(`${API}/find_by_student_id?student_id=1`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});
