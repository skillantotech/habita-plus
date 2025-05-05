const multer = require('multer');
const path = require('path');

// Configure storage settings for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store files
    },
    filename: (req, file, cb) => {
        // Generate a unique file name based on current timestamp and original file name
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// Define allowed file types (images and PDFs)
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Only image files (jpeg, jpg, png) and PDF files are allowed.'));
    }
};

// Configure multer upload options
const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
    fileFilter: fileFilter
});

module.exports = upload;

// const multer = require("multer");
// const path = require("path");

// // Configure storage settings
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// // File type filter
// const fileFilter = (req, file, cb) => {
//   const filetypes = /jpeg|jpg|png|gif|pdf/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname && mimetype) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image or PDF files are allowed"));
//   }
// };

// // Multer upload
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
// });

// module.exports = upload;


