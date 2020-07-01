import {Query} from '../';


const all = () => Query('SELECT * FROM chirps');
const one = (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const destroy = (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id])
const update = ()

export default {all, one};