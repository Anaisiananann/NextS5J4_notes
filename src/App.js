import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import MarkdownInput from "./components/MarkdownInput";

const App = () => {
  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    title: "titre note",
    text: "ma première note sans markdown",
    date:"15/78/56",
  },
  {
    id: nanoid(),
    title: "titre note",
    text: "ma deux note sans markdown",
    date:"15/78/56",
  },
  {
    id: nanoid(),
    title: "titre note",
    text: "ma troiz note sans markdown",
    date:"15/78/56",
  },
  {
    id: nanoid(),
    title: "titre note",
    text: "ma tgjghnote sans markdown",
    date:"15/78/56",
  },


]);

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
};


  return (
    
  <div className="container">
    <div className="left">
      <NotesList 
        notes={notes}        
        handleDeleteNote={deleteNote}/>
      </div>
    <div className="right">
      <MarkdownInput handleAddNote={addNote}/>    
    </div>
  </div>
  );
};

export default App; 

/* <div className="right">
      <div className="markdown"></div>
      <div className="html"></div>
    </div>*/