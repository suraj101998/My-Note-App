import React, { useState } from 'react';
//import './App.css';
import NoteList from './components/NoteList';
import NewNoteForm from './components/NewNoteForm';

function App() {
  // State for notes, next ID, search term, and error
  const [notes, setNotes] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const addNote = (content) => {
    try {
      const newNote = { id: nextId, content };
      setNotes([...notes, newNote]);
      setNextId(nextId + 1);
      setError(null);
    } catch (err) {
      setError('Failed to add note');
    }
  };

  const deleteNote = (id) => {
    try {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      setError(null);
    } catch (err) {
      setError('Failed to delete note');
    }
  };

  const editNote = (id, newContent) => {
    try {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      );
      setNotes(updatedNotes);
      setError(null);
    } catch (err) {
      setError('Failed to edit note');
    }
  };

  return (
    <div className="App">
      <h1>My Note App</h1>
      <h2>Add a New Note</h2>
      <NewNoteForm addNote={addNote} />
      <h2>My Notes</h2>
      {/* Search input */}
      <div className="search">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as user types
        />
      </div>
      {/* Display error message if there is an error */}
      {error && <div className="error">{error}</div>}
      {/* Filter notes based on the search term */}
      {notes.length > 0 ? (
        <NoteList
          notes={notes.filter((note) =>
            note.content.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
}

export default App;
