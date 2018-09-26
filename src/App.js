import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Users} from "./Users";
import {Todos} from "./Todos";

class App extends Component {


    render() {
        return (
            <div>
                <Users/>
                <Todos />
            </div>
        );
    }
}

export default App;