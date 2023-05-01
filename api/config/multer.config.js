const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
cloudinary.config({
  cloud_name: "dmpxijzou",
  api_key: "327618797366193",
  api_secret: "vfmzkKKdVJGzwHDru5o5_3wQm5o",
});
const storageUser = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "PlayerPath",
  },
});

module.exports.user = multer({
  storage: storageUser,
  limits: { fileSize: maxSize },
});
