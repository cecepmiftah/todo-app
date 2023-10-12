const { body, param, validationResult } = require("express-validator");
const { Todo } = require("../../db/models");

module.exports = {
  validateCreate: [
    body("name").notEmpty().withMessage("Name Required!"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          message: "error",
          error: errors.array(),
        });
      }

      next();
    },
  ],
  validateOne: [
    param("id")
      .notEmpty()
      .withMessage("Id Required!")
      .bail()
      .isNumeric()
      .withMessage("Id Must Be Integer!")
      .bail()
      .custom(async (value, { req }) => {
        const checking = await Todo.findOne({ where: { id: value } });
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage("Id Not Found!"),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: "error",
          error: error.array(),
        });
      }

      next();
    },
  ],
  validateUpdate: [
    param("id")
      .notEmpty()
      .withMessage("Id Required!")
      .bail()
      .isNumeric()
      .withMessage("Id Must Be Integer!")
      .bail()
      .custom(async (value, { req }) => {
        const checking = await Todo.findOne({ where: { id: value } });
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage("Id Not Found!"),
    body("name").notEmpty().withMessage("Name Required!"),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: "error",
          error: error.array(),
        });
      }

      next();
    },
  ],
};
