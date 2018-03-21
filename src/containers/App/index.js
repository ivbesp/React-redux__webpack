import React from 'react';
import './style/style.scss';

const App = (props) => {
    return (
        <div className='application'>
            <div className='application__title'>Application container</div>
            {/* Вывод дочерних компонентов */}
            {props.children}
        </div>
    )
};

export default App;

