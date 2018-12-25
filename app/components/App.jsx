import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

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

  render() {
    const {notes} = this.state;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}

export default App;
