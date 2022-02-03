const MarkdownInput =() => {
  return (
  <div className="input" rows='8' cols='10'>
    <input placeholder="Votre titre..."></input>
    <textarea placeholder="Votre note..."></textarea>
    <div className="note-footer">
      <button className="save">Enregistrer</button>
    </div>
  </div>);
};

export default MarkdownInput;