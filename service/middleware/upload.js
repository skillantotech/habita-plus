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

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     console.log("Uploaded file type:", file.mimetype); // Debugging log

//     const allowedTypes = [
//         "image/jpeg", "image/jpg", "image/png", 
//         "application/pdf", "video/mp4", "video/avi"
//     ];

//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error(`Invalid file type: ${file.mimetype}. Allowed: jpeg, jpg, png, pdf, mp4, avi.`));
//     }
// };

// const upload = multer({ 
//     storage, 
//     fileFilter,
//     limits: { fileSize: 20 * 1024 * 1024 } // 20MB max size
// });

// module.exports = upload;
