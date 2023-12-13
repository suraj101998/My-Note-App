import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, editNote }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </ul>
  );
}

export default NoteList;
