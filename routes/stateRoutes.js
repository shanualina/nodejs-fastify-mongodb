const stateController = require('../controller/stateCtrl');

const routes = [{
    method: 'GET',
    url: '/api/state/all',
    handler: stateController.getAllState
},
{
    method: 'GET',
    url: '/api/state/:id',
    handler: stateController.getSingleState
},
{
    method: 'POST',
    url: '/api/state',
    handler: stateController.addState,
},
{
    method: 'POST',
    url: '/api/state/:id',
    handler: stateController.updateState
}
]
module.exports = routes