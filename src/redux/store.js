import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import todo from "./reducers";


const store = createStore(
    todo, composeWithDevTools(applyMiddleware())
)

export default store;