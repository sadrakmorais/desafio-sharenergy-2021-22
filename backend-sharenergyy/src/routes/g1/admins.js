const router = require('express').Router();

const { isAuthenticated } = require('../../middlewares/isAuthenticated');
const { AdminController } = require('../../controller/AdminController');

const adminController = new AdminController();

router.get('/', isAuthenticated, adminController.index);
router.get('/:adminId', isAuthenticated, adminController.show);
router.post('/', adminController.store);
router.delete('/:adminId', isAuthenticated, adminController.destroy);

module.exports = router;
