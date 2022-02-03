import { MdDeleteForever } from 'react-icons/md';
import{ BsFillPencilFill }from 'react-icons/bs';

const Note = () => {
  return (
    <div className="note">
        <span>ello c'st premiere note</span>
        <div className="note-footer">
          <small>52/85/2205</small>
          <div>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
            <BsFillPencilFill className='write-icon' size='1em'/>
          </div>
        </div>
    </div>
  )
};

export default Note;
