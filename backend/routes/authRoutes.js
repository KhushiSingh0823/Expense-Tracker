const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware"); 

const {
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");

const router = express.Router();

// âœ… Updated to handle profile image during registration
router.post("/register", upload.single("image"), registerUser);

router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

// Optional endpoint to upload image separately
router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "no file uploaded" });
    }
    const imageURL = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({ imageURL });
});

module.exports = router;

