const NoteList = (props) => {

    const {notes, setNotes, setEditMode, setEditableNote, setNoteTitle} = props;

const removeHandler = (id) => {
    const newNotes = notes.filter((item) => item.id !== id) // return 2 !== 2 === false;
    setNotes(newNotes)
};

const editHandler = (id) => {
    const toBeEditNote = notes.find((item) => item.id === id) // 1 === 1;
    setEditMode(true);
    setEditableNote(toBeEditNote);
    setNoteTitle(toBeEditNote.title);
};

  return (
    <ul>
      {notes?.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => editHandler(item.id)}>Edit</button>
          <button onClick={() => removeHandler(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
