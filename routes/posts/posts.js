const router = require("express").Router();
const postsController = require("../../controller/postsController");

router.route("/").get(postsController.findAll).post(postsController.create);

router
  .route("/:id")
  .get(postsController.findById)
  .post(postsController.create)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
