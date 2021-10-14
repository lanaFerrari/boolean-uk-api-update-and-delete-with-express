const express = require("express");

const { createOne, getAll, getOneById, updateOneById, updateById, deleteById } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.get("/", getAll);

router.get("/:id", getOneById);

router.put("/:id", updateOneById);

router.patch("/:id", updateById);

router.patch("/:id", deleteById)

// router.put("/byTitle/:title", updateByTitle);

module.exports = router;
