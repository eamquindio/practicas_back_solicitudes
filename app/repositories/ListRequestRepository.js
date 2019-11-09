const ListRequestRepository = module.exports;
const DB = require('../utils/DB');

ListRequestRepository.listAll = () => DB('request').select('*');
