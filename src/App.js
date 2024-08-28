import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('');

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const filteredNotes = notes.filter((note) => 
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Not Uygulaması</h1>
      <NoteForm addNote={addNote} />
      <input 
        type="text" 
        placeholder="Notlarda arama yap..." 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <NoteList notes={filteredNotes} />
    </div>
  );
}

export default App;
