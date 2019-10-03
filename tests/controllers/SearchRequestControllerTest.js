const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const SearchRequestRepository = require('../../app/repositories/SearchRequestRepository');
const Helper = require('../Helper');

const API = '/api/solicitudes-ms/request';
chai.use(chaiHttp);

describe('request CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('create request test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 1,
      name_request: 'Rafael',
      charge_request: 'Talento',
      date: '3 oct 2019',
      practical_type: 1,
      state: 1,
      programer_id: 1,
      company_id: 'uno',
      cycle: '1',
      vacant: 'Desarrollador',
      n_vacant: 2,
      observations: 'aaaa',
    })
    .then(async () => {
      const SearchRequestToAssert = await SearchRequestRepository.find(1);
      assert.equal(SearchRequestToAssert.id, 1);
    }));

  it('find request test', async () => {
    await SearchRequestRepository.create({
      id: 1,
      name_request: 'Rafael',
      charge_request: 'Talento',
      date: '3 oct 2019',
      practical_type: 1,
      state: 1,
      programer_id: 1,
      company_id: 'uno',
      cycle: '1',
      vacant: 'Desarrollador',
      n_vacant: 2,
      observations: 'aaaa',
    });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, {
          id: 1,
          name_request: 'Rafael',
          charge_request: 'Talento',
          date: '3 oct 2019',
          practical_type: 1,
          state: 1,
          programer_id: 1,
          company_id: 'uno',
          cycle: '1',
          vacant: 'Desarrollador',
          n_vacant: 2,
          observations: 'aaaa',
        });
      });
  });
});
