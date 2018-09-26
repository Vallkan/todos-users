import React, { Component } from 'react';
import { Fetcher } from "./Fetcher";

export class Todos extends Component {
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
                <h1>To do list:</h1>
                <Fetcher updateData={this.updateData} url='https://jsonplaceholder.typicode.com/todos/' />
                <ol>
                    {items.map(item => (
                        <li key={item.id}>
                            <ul>
                                <li>Id Пользователя: {item.userId}</li>
                                <li>Заголовок: {item.title}</li>
                                <li>Завершено: {item.completed ? 'Да' : 'Нет'}</li>
                            </ul>
                            <button onClick={() => {this.removeItem(item.id)}}>Удалить</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}