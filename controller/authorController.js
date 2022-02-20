const {Author, Book} = require("../model/model");

const authorController = {
  addAuthor: async (req, res) => {
    res.status(201).json(req.body);
  }
}

module.exports = authorController;