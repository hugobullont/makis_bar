module.exports = (app) => {
    const sessionController = require('../controllers/session.controller.js');
    app.get('/:sessionId',sessionController.sessionRender);
};