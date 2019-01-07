import NoteStore from '../../stores/NoteStore';
import persist from '../../libs/persist';
import storage from '../../libs/storage';

const setup = alt => {
  alt.addStore('NoteStore', NoteStore);
  persist(alt, storage(localStorage), 'app');
};

export default setup;
