import {useState} from "react";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'

function Task(props) {

    const [editName, setEditName] = useState(props.task.name);
    const [openEdit, setOpenEdit] = useState(false);

    const saveButtonHandler = () => {
        props.editTask(editName, props.task.id);
        setOpenEdit(false);
    }

    return (
        <>
            <button onClick={() => setOpenEdit(true)} type="button" className="btn btn-primary" >
                Edit
            </button>

            {openEdit &&
                <>
                    <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    <button onClick={saveButtonHandler}>Save</button>
                    <button onClick={() => setOpenEdit(false)}>Cancel</button>
                </>
            }
        </>
    )
}

const mapDispatchToProps = (dispatch) => (
{
    editTask: (name, id) => dispatch({
        type: 'UPDATE_TASK', payload: {
            name, id
        }
    })
}
)

export default connect(null, mapDispatchToProps)(Task);