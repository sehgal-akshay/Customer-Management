const express = require("express");
const router = express.Router();
// Load User model
const User = require("../../models/User");

router.get("/getcustomerslist", (req, res) => {
  User.find()
    .then(user => {
      // Check if user exists
      if (user.length == 0) {
        return res.status(404).json({
          customerdatanotavailable: " No customer information in the database"
        });
      } else {
        return user;
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
