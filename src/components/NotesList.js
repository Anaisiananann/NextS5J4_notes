import Note from './Note';
import MarkdownInput from './MarkdownInput';

const NotesList = ({ notes}) => {
  return(
    <div className="notes-list">
       {notes.map((note)=> (
        <Note id={note.id} title={note.title} text={note.text} date={note.date}/>
        ))} 
    <MarkdownInput/>

    </div>
  )
};

export default NotesList;