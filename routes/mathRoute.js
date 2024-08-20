const express = require('express');
const router = express.Router();
const mathController = require('../controller/mathController')

router.get('/', mathController.getAllQuestions);
router.get('/:id', mathController.getQuestionById);
router.post('/create', mathController.createMCQ);
router.delete('/:id', mathController.deleteMCQ);
router.put('/update/:id', mathController.updateMCQ);

module.exports = router;
