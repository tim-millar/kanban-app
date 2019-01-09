import NoteStore from '../../stores/NoteStore';
import persist from '../../libs/persist';
import storage from '../../libs/storage';
import LaneStore from '../../stores/LaneStore';

const setup = alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStore);

  persist(alt, storage(localStorage), 'app');
};

export default setup;
