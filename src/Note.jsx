import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function Note() {
  const [noteDraft, setNoteDraft] = useState({title: "",content: ""})
  const [notes, setNotes] = useState([])

  function handleChange(event) {
    const {name, value} = event.target

    setNoteDraft((prev) => {
      return {
        ...prev,
        [name]:value
      }
    })
  }

  function handleAction(e) {
    e.preventDefault();

    setNotes((prev) => [
        ...prev,
        {id:uuidv4(),...prev, ...noteDraft}
    ]);

    setNoteDraft({title:"",content:""});
  }

  function handleDelete(id) {
    setNotes((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="note-container">
      <form className="create-note shadow">
        <input name="title" placeholder="Title"
          value={noteDraft.title}
          onChange={handleChange}
        />
        <textarea name="content" placeholder="Take a note..." rows="3"
          value={noteDraft.content}
          onChange={handleChange}
        />
        <button className="add-btn"
          onClick={handleAction}
        >
          Add
        </button>
      </form>

      <div className="d-flex">
        {notes.map((item) => {
          return (
            <div className="note-card shadow">
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <button className="delete-btn"
                key={item.id}
                onClick={() => handleDelete(item.id)}
              >
                DELETE
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Note;