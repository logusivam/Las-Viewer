const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas', err);
});

// File schema
const fileSchema = new mongoose.Schema({
    filename: String,
    filepath: String,
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const File = mongoose.model('File', fileSchema);

// File upload setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Upload route
app.post('/upload', upload.array('lasFiles', 10), async (req, res) => {
    const files = req.files.map(file => ({
        filename: file.originalname,
        filepath: file.path,
    }));
    await File.insertMany(files);
    res.json({ message: 'Files uploaded successfully' });
});

// Get files route
app.get('/files', async (req, res) => {
    const files = await File.find();
    res.json(files);
});

// Serve static files (LAS files)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
