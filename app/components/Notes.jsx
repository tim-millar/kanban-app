import React from 'react';
import Note from './Note';
import Editable from './Editable';

const Notes = ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => {
  return (
    <ul className="notes">
      {notes.map(({id, editing, task}) => (
        <li key={id}>
          <Note className="note" onClick={onNoteClick.bind(null, id)}>
            <Editable
              className="editable"
              editing={editing}
              value={task}
              onEdit={onEdit.bind(null, id)}
            />
            <button className="delete" onClick={onDelete.bind(null, id)}>
              x
            </button>
          </Note>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
