import React, {Component} from 'react';
import TableContainer from "./components/tableContainer";
import {createStore} from "redux";
import rootReducer from './storage/reduser';
import {Provider} from 'react-redux';
import {loadState, saveState} from "./middlewares/localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(()=>{
    saveState(store.getState());
});

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <TableContainer
                    />
                </div>
            </Provider>
        );
    }
}

export default App;
