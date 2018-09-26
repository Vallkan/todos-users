import {Component} from "react";
import React from "react";

export class Fetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false,
        };

    }


    componentDidMount() {
        fetch(this.props.url)
            .then(res => {
                if (res.status === 404) {
                    alert(res.status + ' Страница не найдена по адресу ' + this.props.url + ' Пожалуйста, введите корректный url')
                } else if (res.status !==200) {
                    alert('Возникла ошибка номер ' + res.status)
                }
                return res;
            })
            .then(res => {
                return res.json()
            })
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
            .catch(function (err) {
                alert('Fetch Error :-S', err);
            })

    }

    render() {
        let { isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Загружаюсь...</div>
        } else {
            return (
                <div>

                    <button onClick={() => { this.props.updateData(this.state.items)}}>Получить список</button>

                </div>
            )
        }
    }
}





