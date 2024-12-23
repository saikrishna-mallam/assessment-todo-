import './list-notes.css';
import { ToggleButton, Button } from 'react-bootstrap';

function Listnotes(props) {
    const status = {
        'P': 'Pending',
        'C': 'Completed'
    }

    return (
        <div className='card' key={props.note.id}>
            <h5>{props.note.title}</h5>
            <p>{props.note.description}</p>
            <span>{status[props.note.status]}</span>
            <Button >Delete</Button>
            {/* onClick={() => deleteNote(props.note.id)} */}
        </div>
    )
}

export default Listnotes;