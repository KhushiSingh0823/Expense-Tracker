const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadImage");

const authController = require("../controllers/authController"); 

const router = express.Router();

// ✅ Use correct reference to functions
router.post("/register", upload.single("image"), authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/getUser", protect, authController.getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageURL = req.file.path;
  res.status(200).json({ imageURL });
});

module.exports = router;
