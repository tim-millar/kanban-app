import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {
  activateNoteEdit = id => {
    this.props.NoteActions.update({id, editing: true});
  };

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New Task'
    });
  };

  deleteNote = (id, event) => {
    event.stopPropagation();
    this.props.NoteActions.delete(id);
  };

  editNote = (id, task) => {
    this.props.NoteActions.update({id, task, editing: false});
  };

  render() {
    const {notes} = this.props;
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

export default connect(
  ({notes}) => ({notes}),
  {NoteActions}
)(App);
