import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    res.json({ message: 'User created' });
});

export default router;
