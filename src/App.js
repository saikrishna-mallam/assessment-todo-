import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import CreateNote from './create-note/create-note';
import Listnotes from './list-notes/list-notes';
import Select from 'react-select/base';
import { Button, Row, Col } from 'react-bootstrap';

function App() {

  const [notes, setNotes] = useState([]);
  const [createNote, setCreateNote] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const status = [
    {key: 'A', value: 'ALL'},
    {key: 'C', value: 'Completed'},
    {key: 'P', value: 'Pending'}
  ]

  useEffect(() => {
    setFilteredNotes(notes);
  })

  const deleteNote = (noteId) => {

  }

  const onSave = (note) => {
    const newNotes = [...notes, note];
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
    setFilteredNotes(newNotes);
    setCreateNote(false);
  }

  const filter = (type) => {
    const fiteredNotes = type === 'A' ? notes : notes.filter(note => note.status === type);
    setFilteredNotes(fiteredNotes)
  }

  return (
    <div className="App">
      {createNote ? 
        <CreateNote onSave={(note) => onSave(note)} notes={notes} createNote={(createNote) => setCreateNote(createNote)}/> :
        <div>
          <div>
            <label>Filter</label>
            <select onChange={(e) => filter(e.target.value)}>
              <option value="A">All</option>
              <option value='C'>Completed</option>
              <option value='P'>Pending</option>
            </select>
          </div>
          {filteredNotes.length > 0 ? filteredNotes.map(note => (
            <Listnotes note={note}/>
          )) : <div>No notes to display</div>}
          <Button onClick={() => setCreateNote(true)}>Create note</Button>
        </div>
      }
    </div>
  );
}

export default App;
