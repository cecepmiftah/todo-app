const { Todo, Item } = require("../../db/models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await Todo.findAll({
        attributes: ["id", "name"],
        include: {
          model: Item,
          attributes: ["id", "name", "todoId"],
        },
      });

      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { name } = req.body;

      const result = await Todo.create({ name });
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
      const result = await Todo.findOne({
        where: { id: id },
        attributes: ["id", "name"],
      });

      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const result = await Todo.findOne({ where: { id: id } });
      const updatedResult = await result.update({
        name: name,
      });

      res.status(200).json({
        message: "success",
        data: updatedResult,
      });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await Todo.findOne({ where: { id: id } });
      const destroy = await result.destroy();

      res.status(200).json({
        message: "success",
        data: destroy,
      });
    } catch (error) {
      next(error);
    }
  },
};
