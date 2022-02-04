import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";



const App = () => {

  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));

  if (!notes){
  const noteTemp = [
    {
      id: nanoid(),
      title: "Titre note",
      text: "Ma première note",
      date:"07/07/07",
    },
    {
      id: nanoid(),
      title: "Titre note 2",
      text: "Ma deuxième note",
      date:"05/04/56",
    },
    {
      id: nanoid(),
      title: "Titre note 3",
      text: "Ma troiz note",
      date:"15/78/56",
    },
    {
      id: nanoid(),
      title: "Titre note 4 ",
      text: "Ma Quatro note",
      date:"20/86/04",
    },
  
  ]
  localStorage.setItem("notes", JSON.stringify(noteTemp))
  setNotes(noteTemp)
};

  

  const addNote = (text, title) => {
  const date = new Date();
 const newNote = {
   id: nanoid(),
   title: title,
   text: text,
   date: date.toLocaleDateString()
 }
  const newNotes = [... notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
  localStorage.notes = JSON.stringify(newNotes);
};

const handleChange = (event) => {
  if (event.target.id === "title") {
    setNoteTitle(event.target.value)
  } else { 
    setNoteText(event.target.value)
  };
};


  return (
    
  <div className="container">
    <div className="left">
      <NotesList 
        notes={notes}        
        handleDeleteNote={deleteNote}/>
      </div>
    <div className="right">
      <NoteDisplay noteText={noteText} noteTitle={noteTitle}/>
      <MarkdownInput 
      handleAddNote={addNote} 
      handleChange={handleChange} 
      noteText={noteText} 
      noteTitle={noteTitle}
      />    
    </div>
  </div>
  );
};

export default App; 

/* <div className="right">
      <div className="markdown"></div>
      <div className="html"></div>
    </div>*/