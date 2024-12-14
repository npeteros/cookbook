const app = require('express');
const router = app.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM recipes WHERE approved = 1';
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error on the server side: ' + err });
        }
        return res.status(200).json({ message: 'Recipes successfully retrieved! ', result });
    });
});

router.get('/pending', (req, res) => {
    const query = 'SELECT * FROM recipes WHERE approved = 0';
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error on the server side: ' + err });
        }
        return res.status(200).json({ message: 'Pending recipes successfully retrieved! ', result });
    })
});

router.patch('/:id/approve', (req, res) => {
    const id = req.params.id;
    const query = 'UPDATE recipes SET approved = 1 WHERE id = ?';

    db.query(query, id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error on the server side: ' + err });
        }
        return res.status(200).json({ message: 'Recipe successfully approved! ', result });
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM recipes WHERE id = ?';

    db.query(query, id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error on the server side: ' + err });
        }
        return res.status(200).json({ message: 'Recipe successfully deleted! ', result });
    });
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM recipes WHERE id = ?';

    db.query(query, id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error on the server side: ' + err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        return res.status(200).json({ message: 'Recipe successfully retrieved! ', result });
    });
});

router.post('/', (req, res) => {
    const data = req.body;
    const query = 'INSERT INTO recipes (name, breakfast, lunch, dinner, ingredients, instructions) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(query, [data.name, data.mealTypes.breakfast, data.mealTypes.lunch, data.mealTypes.dinner, data.ingredients, data.procedure], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error on the server side: ' + err });
        }
        return res.status(200).json({ message: 'Recipe successfully added! ', result });
    });
});

module.exports = router;