const MarkdownInput =({handleAddNote, handleChange, noteText, noteTitle}) => {

  const handleSaveClick = () =>{
    
    handleAddNote(noteText, noteTitle);
  
  };

  /* if(noteText.trim().lenght > 0) {
    handleAddNote(noteText);
    setNoteText('');
    }*/

  return (
  <div className="input">
    <input placeholder="Votre titre..."
    id="title"
   value={noteTitle}
   onChange={handleChange}
    ></input>
    <textarea 
    id="content"
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


/*ca regle la dep du titre mais ç n'enregistre plus

import { useState } from "react";

const MarkdownInput = ({handleAddNote}) => {
  const {handleSubmit, handleChangeTitle, handleChangeContent, title, content, handleDelete} = handleAddNote
  

    return (
      <div className="input">
        <form onSubmit={handleSubmit} >
          <div>
          <input 
            placeholder="Votre titre..."
            value={title}
            onChange={handleChangeTitle}
          ></input>
          </div>
          <div>
          <textarea 
            rows='20' 
            cols='94'
            placeholder="Votre note..."
            value={content}
            onChange={handleChangeContent}
          ></textarea>
          </div>
          <div className="note-footer">
            <div>
            <button className="save" type="submit">Enregistrer</button>
            </div>
            <div>
            <button className='btn' onClick={handleDelete}>Supprimer</button>
            </div>
          </div>
        </form>
      </div>);
    };*/