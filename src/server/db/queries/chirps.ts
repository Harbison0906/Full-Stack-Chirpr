import {Query} from '../';


const all = () => Query('SELECT * FROM chirps');
const one = (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const newChirp = (userid: number, content: string, location: string) => Query('INSERT INTO chirps(userid, content, location) VALUES(?, ?, ?)', [userid, content, location]);
const destroy = (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);


export default {all, one, newChirp, destroy};