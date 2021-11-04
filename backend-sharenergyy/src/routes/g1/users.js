const router = require('express').Router();

const UsersController = require('../../controller/UsersController');

router.get('/', UsersController.index);
router.get('/:_id', UsersController.detail);
router.post('/', UsersController.store);
router.put('/:_id', UsersController.update);
router.delete('/:_id', UsersController.delete);

module.exports = router;
