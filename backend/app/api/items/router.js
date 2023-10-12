var express = require("express");
const { create, getOne, update, destroy, move } = require("./controller");
const {
  validateCreate,
  validateOne,
  validateUpdate,
  validateMove,
} = require("./validation");
var router = express.Router();

router.post("/items", validateCreate, create);
router.get("/items/:id", validateOne, getOne);
router.put("/items/:id", validateUpdate, update);
router.delete("/items/:id", validateOne, destroy);
router.put("/items/move/:id", validateMove, move);

module.exports = router;
