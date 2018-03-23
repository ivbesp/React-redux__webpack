import React, {Component, PropTypes } from 'react';
import './style/style.scss';



export const Welcome_1 = (props) => (
    <h1>Hello, {props.name}</h1>
);



export function Welcome_2(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default Welcome_1;