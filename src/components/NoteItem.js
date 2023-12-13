import React, { useState } from 'react';

function NoteItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editNote(note.id, editedContent);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedContent(note.content);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <li className="note-item">
      {isEditing ? (
        <div className="note-edit">
          <input
            type="text"
            value={editedContent}
            onChange={handleInputChange}
          />
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
          <button className="cancel" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="note-content">
          {note.content}
        </div>
      )}
      {!isEditing && (
        <div className="note-actions">
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default NoteItem;
