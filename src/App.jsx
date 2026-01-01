import {useState} from "react"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import Footer from "./Footer.jsx"
import CreateArea from "./CreateArea.jsx"
import {v4 as uuidv4} from "uuid";

function App() {
  const [notes, setNotes] = useState([])

  function handleAction(noteDraft) {
    setNotes((prev) => [
        ...prev,
        {id:uuidv4(), ...noteDraft}
    ]);
  }

  function handleDelete(id) {
    setNotes((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div>

      <Header />

      <div className="container font-style">
        <CreateArea
          onCreate={handleAction}
        />

        <div className="d-flex">
          {notes.map((item) => (
            <Note
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              onNote={handleDelete}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App;
