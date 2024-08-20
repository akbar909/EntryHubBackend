const englishSchema = require('../models/englishSchema');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await englishSchema.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await englishSchema.findById(req.params.id);
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMCQ = async (req, res) => {
  try {
    const { questionText, options, correctOption } = req.body;
    const newQuestion = new englishSchema({
      questionText,
      options,
      correctOption,
    });
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMCQ = async (req, res) => {
  try {
    const deletedQuestion = await englishSchema.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateMCQ = async (req, res) => {
  try {
    const { questionText, options, correctOption } = req.body;

    // Check if the question exists
    const existingQuestion = await englishSchema.findById(req.params.id);
    if (!existingQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Update the existing question
    existingQuestion.questionText = questionText;
    existingQuestion.options = options;
    existingQuestion.correctOption = correctOption;

    const updatedQuestion = await existingQuestion.save();

    res.json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
