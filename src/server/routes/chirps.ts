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

router.post('/', async (req, res) => {
  const chirp = req.body;
  try {
    const newChirp = await db.chirps.newChirp(chirp.userid, chirp.content, chirp.location);
    res.json('Thanks for chirping!');
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...')
  }
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const content = req.body;
  try {
    const updateChirp = await db.chirps.updateChirp(id, content);
    res.json('Chirp updated!');
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops, something went wrong...')
  }
})

router.delete('/:id?', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const deleteChirp = await db.chirps.destroy(id);
    res.json('Successfully deleted!');
  } catch (error) {
    console.log(error)
    res.status(500).json('Your chirp could not be deleted.')
  }
});

export default router;