const {Author, Book} = require("../model/model");

const authorController = {
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = authorController;