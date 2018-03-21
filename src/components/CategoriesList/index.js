import React, {Component, PropTypes } from 'react';

import './style/style.scss';

const CategoriesList = ({categories}) => (
    <div className="categories-list">
        <div className='categories-list__title'>CategoriesList component</div>
        <div>
            <h2>Активные:</h2>
            <div className='categories-list__list'>
                {categories.map((item, i) =>{
                        if (item.temp){
                            return (
                                <div id={item.anchor_link} key={i}>
                            <span>
                                <b>{item.name}</b> — <a href={'#'+item.anchor_link}>{'#'+item.anchor_link}</a>
                            </span>
                                </div>

                            )
                        }
                    }
                )}
            </div>

            <h2>Неактивные:</h2>
            <div className='categories-list__list'>
                {categories.map((item, i) =>{
                        if (!item.temp){
                            return (
                                <div key={i} className="b-category">
                            <span>
                                <b>{item.name}</b> — <a href={'#'+item.anchor_link}>{'#'+item.anchor_link}</a>
                            </span>
                                </div>
                            )

                        }
                    }
                )}
            </div>

        </div>
    </div>
);

export default CategoriesList;