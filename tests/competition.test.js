const competitionsController =  require('../controllers/competitionsController');
// const competitionsService = require('../services/competitionsService');
const competitionsModel = require('../models/competitionsModel');

const data = {name: 'competição de levantamento de peso', status: 'Em andamento'}

describe('1. Criar uma competição', () => {
  it('Create a new competition', () => {
    const response = competitionsModel.create(data);

    expect(response).toHaveProperty('id');

  })

  it('Return status 200 and the newest competition', () => {
    const request = { body: data};
    competitionsController.create(request);

    expect(response.status.calledWith(200)).toBe(true);
    expect(response.json).toHave(request.body);

  })
});

// describe('3. Finalizar uma competição.', () => {
//   it('Update the status of a competition', () => {

//   })

//   it('Return status 200 and the message "Status updated"', () => {

//   })
// });