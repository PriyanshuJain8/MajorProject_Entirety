//////////////////////////////////////////////////////////////
const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Entirety/public/img/propertyImages/'); // Directory where uploaded images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
  }
});

// Initialize multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Increased limit to 10 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});
// }).single('image'); // 'image' should match the name attribute in your form input for file upload

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images only!');
  }
}

module.exports = upload;







