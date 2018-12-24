import React from 'react';
import Note from './Note';

const Notes = ({notes}) => {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <Note task={note.task} />
        </li>
      ))}
    </ul>
  );
};

export default Notes;
