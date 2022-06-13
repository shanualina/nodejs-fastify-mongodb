const countryController = require('../controller/countryCtrl');

const routes = [{
    method: 'GET',
    url: '/api/county/all',
    handler: countryController.getAllCountry
},
{
    method: 'GET',
    url: '/api/county/:id',
    handler: countryController.getSingleCounty
},
{
    method: 'POST',
    url: '/api/county',
    handler: countryController.addCounty,
},
{
    method: 'POST',
    url: '/api/county/:id',
    handler: countryController.updateCountry
}
]
module.exports = routes