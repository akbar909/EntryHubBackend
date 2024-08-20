const express = require('express');
const router = express.Router();
const englishController = require('../controller/englishController')

router.get('/', englishController.getAllQuestions);
router.get('/:id', englishController.getQuestionById);
router.post('/create', englishController.createMCQ);
router.delete('/:id', englishController.deleteMCQ);
router.put('/update/:id', englishController.updateMCQ);

module.exports = router;
