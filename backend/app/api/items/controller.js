const { Todo, Item } = require("../../db/models");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name, TodoId } = req.body;

      const result = await Item.create({ name, TodoId });
      res.status(201).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      next(err);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Item.findOne({
        where: { id: id },
        attributes: ["id", "name"],
      });

      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const result = await Item.findOne({ where: { id: id } });
      const updatedResult = await result.update({
        name,
      });

      res.status(200).json({
        message: "success",
        data: updatedResult,
      });
    } catch (error) {
      next(err);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await Item.findOne({ where: { id: id } });
      const destroy = await result.destroy();

      res.status(200).json({
        message: "success",
        data: destroy,
      });
    } catch (error) {
      next(err);
    }
  },

  move: async (req, res, next) => {
    try {
      // get id item
      const { id } = req.params;
      // get id todo target
      const { targetTodoId } = req.body;
      const result = await Item.findOne({ where: { id: id } });

      result.TodoId = targetTodoId;

      await result.save();

      res.status(200).json({ message: "success update item", data: result });
    } catch (err) {
      next(err);
    }
  },
};
