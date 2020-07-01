import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    if (id) {
      const chirp = await db.chirps.one(id)
      res.json(chirp)
    } else {
      const chirps = await db.chirps.all()
      res.json(chirps)
      
    }
  } catch (error) {
    console.log(error)
    res.status(500).json('It is dead')
  }
});

export default router;