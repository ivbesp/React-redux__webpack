import React, {Component, PropTypes } from 'react';
import './style/style.scss';

//Работа с текстовым полем
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Name: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" defaultValue="defaultName" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}





//Работа с полем загрузки файла
class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${this.fileInput.files[0].name}`
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input
                        type="file"
                        ref={input => {
                            this.fileInput = input;
                        }}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}


//Источник: https://reactjs.org/docs/uncontrolled-components.html