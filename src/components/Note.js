import { MdDeleteForever } from 'react-icons/md';
import{ BsFillPencilFill }from 'react-icons/bs';

const Note = ({id, title, text, date}) => {
  return (
    <div className="note">
        <h3 className="note-title">{title}</h3>
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <div>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
            <BsFillPencilFill className='write-icon' size='1em'/>
          </div>
        </div>
    </div>
  )
};

export default Note;
