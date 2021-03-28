import {useState} from "react";
import { connect } from "react-redux";

function Task(props){

    const [editName, setEditName] = useState(props.task.name)

    return(
        <>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}/>
            <button onClick={() => props.editTask(editName, props.task.id)}>Save</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    editTask: (name, id) => dispatch({
        type: 'UPDATE_TASK', payload: {
            name, id
        }
    })
})

export default connect(null, mapDispatchToProps)(Task);