const cityController = require('../controller/cityCtrl');

const routes = [{
    method: 'GET',
    url: '/api/city/all',
    handler: cityController.getAllCity
},
{
    method: 'GET',
    url: '/api/city/:id',
    handler: cityController.getSingleCity
},
{
    method: 'POST',
    url: '/api/city',
    handler: cityController.addCity,
},
{
    method: 'POST',
    url: '/api/city/:id',
    handler: cityController.updateCity
}
]
module.exports = routes