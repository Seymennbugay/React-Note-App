import React from 'react';

const Note = ({ note }) => {
  return (
    <div style={{ backgroundColor: note.color, padding: '10px', margin: '10px 0' }}>
      {note.text}
    </div>
  );
};

export default Note;
