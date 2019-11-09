const ListRequestService = module.exports;
const ListRequestRepository = require('../repositories/ListRequestRepository');

ListRequestService.listAll = () => {
    console.log('find all request');
  
  return ListRequestRepository.listAll();
};
