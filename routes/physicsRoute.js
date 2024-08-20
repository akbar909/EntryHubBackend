const express = require('express');
const router = express.Router();
const physicsController = require('../controller/physicsController')

router.get('/', physicsController.getAllQuestions);
router.get('/:id', physicsController.getQuestionById);
router.post('/create', physicsController.createMCQ);
router.delete('/:id', physicsController.deleteMCQ);
router.put('/update/:id', physicsController.updateMCQ);

module.exports = router;
