const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadImage");

const {
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", upload.single("image"), registerUser);

router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "no file uploaded" });
    }
    const imageURL = req.file.path;
    res.status(200).json({ imageURL });
});

module.exports = router;
