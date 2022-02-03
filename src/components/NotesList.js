import Note from './Note';
import MarkdownInput from './MarkdownInput';

const NotesList = ({ notes, handleAddNote, handleDeleteNote}) => {
  return(
    <div className="notes-list">
      <div className='left'>
       {notes.map((note)=> (
        <Note 
          id={note.id} 
          title={note.title} 
          text={note.text} 
          date={note.date}
          handleDeleteNote= {handleDeleteNote}/>
        ))} 
      </div>
      </div>
   
    
  )
};

export default NotesList;