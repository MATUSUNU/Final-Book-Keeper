import { useState } from "react";

function CreateArea(props) {
  const [noteDraft, setNoteDraft] = useState({title: "",content: ""})

  function handleChange(event) {
    const {name, value} = event.target

    setNoteDraft((prev) => {
      return {
        ...prev,
        [name]:value
      }
    })
  }

  return (
    <div>
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
          onClick={(event) => {
            props.onCreate(noteDraft)
            setNoteDraft({
              title:"",
              content:""
            })
            event.preventDefault()
          }}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default CreateArea;
