const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|pdf|xlsx|csv/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = file.mimetype.includes("excel") || file.mimetype.includes("spresdsheetml") || allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Only image files (jpeg, jpg, png) and PDF , Excel(.xlsx), or CSV files are allowed.'));
    }
};


const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: fileFilter
});

module.exports = upload;