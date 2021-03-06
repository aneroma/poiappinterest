const Accounts = require('./app/controllers/accounts');
const PointsOfInterest = require('./app/controllers/pointsOfInterest');

module.exports = [
    { method: 'GET', path: '/', config: Accounts.index },
    { method: 'GET', path: '/signup', config: Accounts.showSignup },
    { method: 'GET', path: '/login', config: Accounts.showLogin },
    { method: 'GET', path: '/logout', config: Accounts.logout },
    { method: 'POST', path: '/signup', config: Accounts.signup },
    { method: 'POST', path: '/login', config: Accounts.login },
    { method: 'GET', path: '/settings', config: Accounts.showSettings },
    { method: 'POST', path: '/settings', config: Accounts.updateSettings },
    { method: 'GET', path: '/homeadmin/deleteUser/{_id}', config: Accounts.deleteUser },

    { method: 'GET', path: '/home', config: PointsOfInterest.home },
    { method: 'GET', path: '/homeadmin', config: PointsOfInterest.home },
    { method: 'GET', path: '/report', config: PointsOfInterest.report },
    { method: 'GET', path: '/poi/{_id}', config: PointsOfInterest.showPOI },
    { method: 'GET', path: '/updatepoi/{_id}', config: PointsOfInterest.showUpdatePOI },
    { method: 'POST', path: '/addpoiform', config: PointsOfInterest.addPOI },
    { method: 'POST', path: '/updatepoi/{_id}', config: PointsOfInterest.updatePOI },
    { method: 'POST', path: '/deletepoi/{_id}', config: PointsOfInterest.deletePOI },
    { method: 'POST', path: '/addcategory', config: PointsOfInterest.addCategory },
    { method: 'POST', path: '/updatepoi/{_id}/addimage', config: PointsOfInterest.addImage },

    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './public'
            }
        },
        options: { auth: false }
    }
];