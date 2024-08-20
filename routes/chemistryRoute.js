const express = require('express');
const router = express.Router();
const chemistryController = require('../controller/chemistryController')

router.get('/', chemistryController.getAllQuestions);
router.get('/:id', chemistryController.getQuestionById);
router.post('/create', chemistryController.createMCQ);
router.delete('/:id', chemistryController.deleteMCQ);
router.put('/update/:id', chemistryController.updateMCQ);

module.exports = router;
