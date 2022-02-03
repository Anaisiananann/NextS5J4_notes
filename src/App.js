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

const addNote = (text) => {
console.log(text);

};


  return (
    
  <div className="container">
    <NotesList notes={notes} handleAddNote={addNote}/>
  </div>
  );
};

export default App; 

/* <div className="right">
      <div className="markdown"></div>
      <div className="html"></div>
    </div>*/