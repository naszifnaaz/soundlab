const { validationResult, body } = require("express-validator");

const validationBodyRules = [
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password should be atleast 6 characters").isLength({
    min: 6,
  }),
  body("fullname").notEmpty(),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  next();
};

module.exports = { validationBodyRules, checkRules };
