import './App.css';
import {connect} from "react-redux";
import {useState} from "react";
import Task from "./Task";

function App(props) {

    const [newName, setNewName] = useState('');


    const createButtonHandler = () => {
        const newTask = {name: newName, id: Math.random(), status: false};
        props.addTask(newTask);
        setNewName('');
    };

    return (
        <div className="App">
            <h1>Redux-todo</h1>
            {props.todo.map(el =>
                <li>
                    {el.name}
                    <Task task={el}/>
                    <button onClick={() => props.deleteTask(el.id)}>Delete</button>
                </li>
            )}

            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <button onClick={createButtonHandler}>Add todo</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todo: state.todo,
})

const mapDispatchToProps = (dispatch) => ({
    addTask: (newTask) => dispatch({
        type: 'ADD_TASK', payload: {
            ...newTask
        }
    }),
    deleteTask: (id) => dispatch({
        type: 'DELETE', payload: {
            id
        }
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
