import React from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = ({noteText, noteTitle}) => {
  const content = {__html: converter.makeHtml(noteText)};

  return (
    <div style={{color:"antiquewhite"}}>
      <h1>{noteTitle}</h1>
      <div dangerouslySetInnerHTML={content}/>
    </div>
  )
}

export default NoteDisplay
