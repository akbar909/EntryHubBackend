const express = require('express');
const router = express.Router();
const biologyController = require('../controller/biologyController')

router.get('/', biologyController.getAllQuestions);
router.get('/:id', biologyController.getQuestionById);
router.post('/create', biologyController.createMCQ);
router.delete('/:id', biologyController.deleteMCQ);
router.put('/update/:id', biologyController.updateMCQ);

module.exports = router;
