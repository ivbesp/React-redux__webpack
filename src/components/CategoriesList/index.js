import React, {Component, PropTypes } from 'react';

import './style/style.scss';
import Category from './../Category';

const CategoriesList = ({categories}) => (
    <div className="categories-list">
        <div className='categories-list__title'>CategoriesList component</div>
        <div>
            <h2>Активные:</h2>
            <div className='categories-list__list'>
                {categories.map((item, i) =>{
                        if (item.temp){
                            return (
                                <div key={i} id={item.anchor_link}>
                                    <Category anchor_link={item.anchor_link} name={item.name} />
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
                                <div key={i} id={item.anchor_link}>
                                    <Category anchor_link={item.anchor_link} name={item.name} />
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