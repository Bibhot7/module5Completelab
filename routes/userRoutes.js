const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

// Middleware for validating the required properties in a user object
function validateUser(user) {
  return user && user.name && user.location;
}

// Middleware for finding a user by ID
function findUserById(userId) {
  return users.find((user) => user.id == userId);
}

router.get("/headers", (req, res) => {
  console.log(req.headers);
  res.json(req.headers);
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  const userId = req.params.id;
  const user = findUserById(userId);

  if (user) {
    res.status(200).json({ result: user });
  } else {
    res.status(404).json({ error: `User ${userId} not found` });
  }
});

router.post("/", (req, res) => {
  const newUser = req.body;

  if (!validateUser(newUser)) {
    res.status(400).json({ error: "User must contain a name and location" });
    return;
  }

  // Generate a unique ID for the new user
  newUser.id = users.length + 1;
  
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
