import React, { useState } from 'react';

function NewNoteForm({ addNote }) {
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteContent.trim() !== '') {
      addNote(noteContent);
      setNoteContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your note..."
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewNoteForm;
