import { useState } from "react";


function CreateNote(props) {

    const [noteId, setNoteId] = useState(null);
    const [noteTitle, setNoteTitle] = useState(null);
    const [noteDescription, setNoteDescription] = useState(null);
    const [noteStatus, setNoteStatus] = useState('P');

    const save = () => {
        const note = {
            id: noteId,
            title: noteTitle,
            description: noteDescription
        }
        props.onSave(note);
    }

    return (
        <div className="col-12">
          <form>
            <div>
              <label>Note id:</label>
              <input type="text" placeholder='Please enter unique note id' className='form-control' onChange={(e) => setNoteId(e.target.value)}/>
            </div>
            <div>
              <label>Note title: </label>
              <input type="text" className='form-control' onChange={(e) => setNoteTitle(e.target.value)}/>
            </div>
            <div>
              <label>Description: </label>
              <input type="text" className="form-control" onChange={(e) => setNoteDescription(e.target.value)}/>
            </div>
            <button onClick={() => save()}>Save</button>
            <button onClick={() => props.createNote(false)}>Cancel</button>
          </form>
        </div>
    )
}

export default CreateNote;