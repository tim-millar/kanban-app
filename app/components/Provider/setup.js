import NoteStore from '../../stores/NoteStore';

const setup = alt => {
  alt.addStore('NoteStore', NoteStore);
};

export default setup;
