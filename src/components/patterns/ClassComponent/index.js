import React, {Component, PropTypes } from 'react';
import './style/style.scss';

class Clock extends React.Component {
    //начальная инициализация
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //вызывается при обновлении объекта props
    componentWillReceiveProps(nextProps) {}

    //вызывается при обновлении объекта prop или state и если возвращает true, то компонент рендерится
    shouldComponentUpdate(nextProps, nextState) {}

    //вызывается перед обновлением компонента, если shouldComponentUpdate возвращает true
    componentWillUpdate(nextProps, nextState) {}

    //вызывается сразу после обновления компонента, если shouldComponentUpdate возвращает true
    componentDidUpdate(prevProps, prevState){}

    //вызывается непосредственно перед рендерингом
    componentWillMount() {}

    //вызывается сразу после рендеринга
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //вызывается после удаления компонента из DOM
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    //отрисовка компонента
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;

//О жизненных циклах компонента: https://reactjs.org/docs/react-component.html#lifecycle-methods