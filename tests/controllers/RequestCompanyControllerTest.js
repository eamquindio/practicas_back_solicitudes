const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const RequestCompanyRepository = require('../../app/repositories/RequestCompanyRepository');
const Helper = require('../Helper');

const API = '/api/solicitudes-ms/request_company';
chai.use(chaiHttp);

describe('Request CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });
  it('create request_company test', async () => chai
    .request(app)
    .post(API)
    .send({
      id: 1,
      r_legal: 'David',
      charge_request: 'Programador',
      head_area: 'David',
      chief_charge: 'Juan',
      date: '2 feb 2019',
      city: 'Armenia',
      c_address: 'calle 5 N',
      c_phone: '3113293389',
      c_mail: 'yuxi@gmail.com',
      Nit: '12345',
      sector: 'norte',
      c_name: 'yuxi',
      partnership: 'aaa',
      name_who_req: 'bbb',
      agreement_u: 'ccc',
      prac_ty_id: 1,
      society_ty_id: 1,
      city_id: 1,
      req_sta_id: 1,
      programer_id: 1
    })
    .then(async () => {
      const requestToAssert = await RequestCompanyRepository.find(1);
      assert.equal(requestToAssert.id, 1);
    }));

  it('create request_company the company request already exists', async () => {
    await RequestCompanyRepository.create({
      id: 1,
      r_legal: 'David',
      charge_request: 'Programador',
      head_area: 'David',
      chief_charge: 'Juan',
      date: '2 feb 2019',
      city: 'Armenia',
      c_address: 'calle 5 N',
      c_phone: '3113293389',
      c_mail: 'yuxi@gmail.com',
      Nit: '12345',
      sector: 'norte',
      c_name: 'yuxi',
      partnership: 'aaa',
      name_who_req: 'bbb',
      agreement_u: 'ccc',
      prac_ty_id: 1,
      society_ty_id: 1,
      city_id: 1,
      req_sta_id: 1,
      programer_id: 1,
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        r_legal: 'David',
        charge_request: 'Programador',
        head_area: 'David',
        chief_charge: 'Juan',
        date: '2 feb 2019',
        city: 'Armenia',
        c_address: 'calle 5 N',
        c_phone: '3113293389',
        c_mail: 'yuxi@gmail.com',
        Nit: '12345',
        sector: 'norte',
        c_name: 'yuxi',
        partnership: 'aaa',
        name_who_req: 'bbb',
        agreement_u: 'ccc',
        prac_ty_id: 1,
        society_ty_id: 1,
        city_id: 1,
        req_sta_id: 1,
        programer_id: 1,
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
});
