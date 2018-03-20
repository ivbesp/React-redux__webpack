import React from 'react';
import './style/style.scss';

const App = (props) => {
    return (
        <div className='application'>
            <h1>Application</h1>
            {/* Вывод дочерних компонентов */}
            {props.children}
        </div>
    )
};

export default App;

