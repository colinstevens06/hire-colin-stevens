const router = require("express").Router()
const messagesController = require("../../controllers/messagesController")

router.route("/")
  .post(messagesController.sendOne)

module.exports = router;