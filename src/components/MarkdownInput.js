import { useState } from "react";

const MarkdownInput =({handleAddNote}) => {

  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () =>{
    handleAddNote(noteText);
  };

  return (
  <div className="input">
    <input placeholder="Votre titre..."></input>
    <textarea 
     rows='8' 
     cols='10'
     placeholder="Votre note..."
     value={noteText}
     onChange={handleChange}
     ></textarea>
    <div className="note-footer">
      <button className="save" onClick={handleSaveClick}>Enregistrer</button>
    </div>
  </div>);
};

export default MarkdownInput;