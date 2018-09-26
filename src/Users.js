import React, { Component } from 'react';
import { Fetcher } from "./Fetcher";

export class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.updateData = this.updateData.bind(this)

    }

    updateData = (items) => {
        this.setState({items: items})
    }

    removeItem = (id) => {
        this.setState(prevState => ({
            items: prevState.items.filter(item => item.id !== id)
        }))
    }

    render() {
        const items = this.state.items;
        return (
            <div>
                <h1>Users list:</h1>
                <Fetcher updateData={this.updateData} url='https://jsonplaceholder.typicode.com/users/' />
                <ol>
                    {items.map(item => (
                        <li key={item.id}>
                            <ul>
                                <li>Имя: {item.name}</li>
                                <li>Username: {item.username}</li>
                                <li>Email: {item.email}</li>
                                <li>Address:</li>
                                <ul>
                                    <li>Street: {item.address.street}</li>
                                    <li>Suite: {item.address.suite}</li>
                                    <li>City: {item.address.city}</li>
                                    <li>Zipcode: {item.address.zipcode}</li>
                                    <li>Location: latitude: {item.address.geo.lat}; longitude: {item.address.geo.lng}f</li>
                                </ul>
                            </ul>
                            <button onClick={() => {this.removeItem(item.id)}}>Удалить</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
