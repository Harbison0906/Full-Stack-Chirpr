import {Query} from '../';


const all = () => Query('SELECT * FROM chirps');
const one = (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const newChirp = (object: any) => Query('INSERT INTO chirps(userid, content, location)');
const destroy = (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);


export default {all, one, newChirp, destroy};