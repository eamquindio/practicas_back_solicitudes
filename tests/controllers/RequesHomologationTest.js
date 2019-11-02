const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const HomologationRespository = require('../../app/repositories/HomologationRespository');
const Helper = require('../Helper');

const API = '/api/solicitudes-ms/homologacion';
chai.use(chaiHttp);

describe('Homologation CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('create homologation test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 1,
      date: '2 nov 2019',
      cycle: 1,
      programer_id: 1,
      student_name: 'Diego Lugo',
      type_id: 1,
      number_id: '1094950977',
      code: '2320151006',
      email: 'diegoalugo@hotmail.com',
      phone: '3165776593',
      function_company: 'Desarrollador SAP',
      company: 'Yuxi',
      address: 'fundadores',
      department: 1,
      city: 1,
      company_phone: '3165452847',
      boss_company: 'Carlos',
      position: 'Gerente',
      email_company: 'yuxi@hotmail.com',
      phone_contact: '3125657887',
    })
    .then(async () => {
      const requestToAssert = await HomologationRespository.find(1);
      assert.equal(requestToAssert.id, 1);
   }));

  it('find request test', async () => {
    await HomologationRespository.create({
      id: 1,
      date: '2 nov 2019',
      cycle: 1,
      programer_id: 1,
      student_name: 'Diego Lugo',
      type_id: '1',
      number_id: '1094950977',
      code: '2320151006',
      email: 'diegoalugo@hotmail.com',
      phone: '3165776593',
      function_company: 'Desarrollador SAP',
      company: 'Yuxi',
      address: 'fundadores',
      department: 1,
      city: 1,
      company_phone: '3165452847',
      boss_company: 'Carlos',
      position: 'Gerente',
      email_company: 'yuxi@hotmail.com',
      phone_contact: '3125657887',
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        date: '2 nov 2019',
        cycle: 1,
        programer_id: 1,
        student_name: 'Diego Lugo',
        type_id: '1',
        number_id: '1094950977',
        code: '2320151006',
        email: 'diegoalugo@hotmail.com',
        phone: '3165776593',
        function_company: 'Desarrollador SAP',
        company: 'Yuxi',
        address: 'fundadores',
        department: 1,
        city: 1,
        company_phone: '3165452847',
        boss_company: 'Carlos',
        position: 'Gerente',
        email_company: 'yuxi@hotmail.com',
        phone_contact: '3125657887',
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
});
