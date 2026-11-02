const express = require('express');
const router = express.Router();

const tugasController = require('../controllers/tugas.controller');

router.get('/', tugasController.index);

router.get('/tambah', tugasController.create);

router.post('/', tugasController.store);

router.get('/edit/:id', tugasController.edit);

router.post('/edit/:id', tugasController.update);

router.post('/hapus/:id', tugasController.destroy);

module.exports = router;