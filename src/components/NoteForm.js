import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      text,
      color
    });
    setText('');
    setColor('#ffffff');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Notunuzu yazın..."
        required
      />
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <button type="submit">Not Ekle</button>
    </form>
  );
};

export default NoteForm;
