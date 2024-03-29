const router = require("express").Router();
const authorController = require("../controller/authorController");

// Add author
router.post("/", authorController.addAuthor);
router.get("/", authorController.getAuthors);

module.exports = router;