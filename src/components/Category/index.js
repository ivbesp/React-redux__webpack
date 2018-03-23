import React, { PropTypes } from 'react';

import './style/style.scss';

const Category = ({anchor_link, name, i}) => (
    <span>
        <b>{name}</b> — <a href={'#'+anchor_link}>{'#'+anchor_link}</a>
    </span>
);

export default Category;