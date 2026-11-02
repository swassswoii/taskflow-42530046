const Tugas = require('../models/tugas.model');

const index = async (req, res) => {
    try {
        const tugas = await Tugas.getAllTugas();

        res.render('tugas/index', {
            title: 'Daftar Tugas',
            tugas
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal mengambil data tugas.');
    }
};

const create = (req, res) => {
    res.render('tugas/create', {
        title: 'Tambah Tugas'
    });
};

const store = async (req, res) => {
    try {
        await Tugas.createTugas(req.body);
        res.redirect('/tugas');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menyimpan tugas.');
    }
};

const edit = async (req, res) => {
    try {
        const tugas = await Tugas.getTugasById(req.params.id);

        if (!tugas) {
            return res.status(404).send('Tugas tidak ditemukan.');
        }

        res.render('tugas/edit', {
            title: 'Edit Tugas',
            tugas
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal mengambil data tugas.');
    }
};

const update = async (req, res) => {
    try {
        const result = await Tugas.updateTugas(req.params.id, req.body);

        if (result.affectedRows === 0) {
            return res.status(404).send('Tugas tidak ditemukan.');
        }

        res.redirect('/tugas');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal memperbarui tugas.');
    }
};

const destroy = async (req, res) => {
    try {
        const result = await Tugas.deleteTugas(req.params.id);

        if (result.affectedRows === 0) {
            return res.status(404).send('Tugas tidak ditemukan.');
        }

        res.redirect('/tugas');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menghapus tugas.');
    }
};

module.exports = {
    index,
    create,
    store,
    edit,
    update,
    destroy
};