import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {notes: [...notes]};
  }

  activateNoteEdit = id => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = true;
        }
        return note;
      })
    });
  };

  addNote = () => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uuid.v4(),
          task: 'New task'
        }
      ]
    });
  };

  deleteNote = (id, event) => {
    event.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    });
  };

  render() {
    const {notes} = this.state;
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>
          +
        </button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    );
  }
}

export default connect(() => ({test: 'test'}))(App);
