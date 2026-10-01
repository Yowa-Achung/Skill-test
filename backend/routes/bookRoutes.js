const router = require("express").Router();
const { getBooks, addBook } = require("../controllers/bookControllers");

router.get("/", getBooks);

router.post("/", addBook);

module.exports = router;