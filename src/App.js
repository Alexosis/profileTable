import React, {Component} from 'react';
import TableContainer from "./components/tableContainer";
import {createStore} from "redux";
import rootReducer from './storage/reduser';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

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
