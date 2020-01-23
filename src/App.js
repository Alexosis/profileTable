import React, {Component} from 'react';
import TableContainer from "./components/tableContainer";
import {createStore} from "redux";
import rootReducer from './storage/reducer';
import {Provider} from 'react-redux';
import {loadState, saveState} from "./middlewares/localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(()=>{
    saveState(store.getState());
});

class App extends Component{

    async componentDidMount(){

        fetch('http://localhost:8080/responses')
            .then(
                function (response) {
                    if (!response.ok){
                        alert('Something went wrong... Try to update later');
                        return
                    }

                    response.json().then(function (data) {
                        store.dispatch({
                            type: 'DATA_ORDER',
                            payload: data
                        })
                    })
                }
            )
            .catch(function (err) {
                alert('Fetch Error: ' + err);
            });
    }

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
