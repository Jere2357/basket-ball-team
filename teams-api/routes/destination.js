module.exports = function (app) {
    var controller = require('../controller/destinationController');

    app.route('/teams')
        .get(controller.list)
        .post(controller.create);


    app.route('/teams/:id')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

};