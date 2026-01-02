import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note-card shadow">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete-btn"
        key={props.id}
        onClick={() => props.onNote(props.id)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;