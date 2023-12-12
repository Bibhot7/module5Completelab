const express = require("express");
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// Routes for addition
router.post("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

router.get('/add', (req, res) => {
  // It seems unusual to have a GET route for addition that might conflict with the POST route.
  // If it's not required, you can remove this route.
  calculatorController.addNumbers(req, res);
});

// Routes for subtraction
router.post("/subtract", (req, res) => {
  calculatorController.subNumbers(req, res);
});

// Routes for multiplication
router.post("/multiply", (req, res) => {
  calculatorController.multiNumbers(req, res);
});

// Routes for division
router.post("/divide", (req, res) => {
  calculatorController.divNumbers(req, res);
});

module.exports = router;

