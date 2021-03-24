const router = require("express").Router();
const messageRoute = require("./messages")

router.use("/messages", messageRoute)

module.exports = router;