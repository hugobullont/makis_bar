module.exports = (app) => {
    const indexController = require('../controllers/index.controller.js');
    app.get('/', indexController.indexRender);
};