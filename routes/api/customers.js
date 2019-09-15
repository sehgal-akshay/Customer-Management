const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load User model
const User = require("../../models/User");

router.get("/getcustomerslist", (req, res) => {
  console.log("here in node");
  User.find()
    .then(users => {
      // Check if user exists
      if (users.length == 0) {
        return res.status(404).json({
          customerdatanotavailable: " No customer information in the database"
        });
      } else {
        const payload = {
          customersList: users
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );

        //return json.parse(user);
        // console.log("api" + user);
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
