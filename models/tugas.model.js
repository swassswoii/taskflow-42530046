const db = require('../config/database');

const getAllTugas = async () => {
    const [rows] = await db.execute(
        'SELECT * FROM tugas ORDER BY deadline ASC'
    );

    return rows;
};

const getTugasById = async (id) => {
    const [rows] = await db.execute(
        'SELECT * FROM tugas WHERE id = ?',
        [id]
    );

    return rows[0];
};

const createTugas = async (data) => {
    const { judul, mata_kuliah, deskripsi, deadline, prioritas, status, bobot } = data;

    const [result] = await db.execute(
        `INSERT INTO tugas
        (judul, mata_kuliah, deskripsi, deadline, prioritas, status, bobot)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [judul, mata_kuliah, deskripsi, deadline, prioritas, status, bobot]
    );

    return result;
};

const updateTugas = async (id, data) => {
    const { judul, mata_kuliah, deskripsi, deadline, prioritas, status, bobot } = data;

    const [result] = await db.execute(
        `UPDATE tugas SET
        judul = ?,
        mata_kuliah = ?,
        deskripsi = ?,
        deadline = ?,
        prioritas = ?,
        status = ?,
        bobot = ?
        WHERE id = ?`,
        [judul, mata_kuliah, deskripsi, deadline, prioritas, status, bobot, id]
    );

    return result;
};

const deleteTugas = async (id) => {
    const [result] = await db.execute(
        'DELETE FROM tugas WHERE id = ?',
        [id]
    );

    return result;
};

module.exports = {
    getAllTugas,
    getTugasById,
    createTugas,
    updateTugas,
    deleteTugas
};