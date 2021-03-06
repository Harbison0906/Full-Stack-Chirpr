import {Query} from '../';


const all = () => Query('SELECT * FROM chirps');
const one = (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const newChirp = (userid: number, content: string) => Query('INSERT INTO chirps(userid, content) VALUES(?, ?)', [userid, content]);
const updateChirp = (id: number, content: string) => Query('UPDATE chirps SET content = ? WHERE id = ?', [content, id]);
const destroy = (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);


export default {all, one, newChirp, updateChirp, destroy};