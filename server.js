const path = require('path');
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

const apiLimiter = rateLimit({
	max: 100,
	windowMs: 15 * 60 * 1000,
	message: { error: 'Слишком много запросов, попробуйте позже.' }
});
app.use('/api/', apiLimiter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
	res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' });
});

app.get('*', (req, res) => {
	const indexPath = path.join(__dirname, 'public', 'index.html');
	res.sendFile(indexPath);
});

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});