const router = require("express").Router();
const postsRoutes = require("./posts");

// Book routes
router.use("/api/posts", postsRoutes);

module.exports = router;
