const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

const tugasRoutes = require('./routes/tugas.routes');
app.use('/tugas', tugasRoutes);

app.get('/', (req, res) => {
    res.redirect('/tugas');
});

app.listen(PORT, () => {
    console.log(`TaskFlow berjalan di http://localhost:${PORT}`);
});