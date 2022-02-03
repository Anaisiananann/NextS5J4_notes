import Note from './Note';
import MarkdownInput from './MarkdownInput';

const NotesList = ({ notes, handleAddNote}) => {
  return(
    <div className="notes-list">
       {notes.map((note)=> (
        <Note id={note.id} title={note.title} text={note.text} date={note.date}/>
        ))} 
    <MarkdownInput handleAddNote={handleAddNote}/>

    </div>
  )
};

export default NotesList;