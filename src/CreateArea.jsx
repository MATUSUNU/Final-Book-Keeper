import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import fabStyles from "./materialui";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [noteDraft, setNoteDraft] = useState({title: "",content: ""})
  const [show, setShow] = useState(false);

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
        {
          show&& (
              <input name="title" placeholder="Title"
                value={noteDraft.title}
                onChange={handleChange}
              />
          )
        }
        <textarea name="content" placeholder="Take a note..." rows={show?"3":"1"}
          value={noteDraft.content}
          onChange={handleChange}
          onFocus={() => setShow(true)}
        />
        <Zoom in={show&&true}>
          <Fab
            sx={fabStyles}
            onClick={(event) => {
              props.onCreate(noteDraft)
              setNoteDraft({
                title:"",
                content:""
              })
              event.preventDefault()
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea;
