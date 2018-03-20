import React, {Component, PropTypes } from 'react';

import './style/style.scss';

const CategoriesList = ({categories}) => (
    <div className="categories-list">
        <p>CategoriesList</p>
        <div>
            <h1>КАТЕГОРИИ</h1>

            <h2>Активные:</h2>
            <div>
                {categories.map((item, i) =>{
                        if (item.temp){
                            return (
                                <div key={i}>
                            <span>
                                <b>{item.category_name}</b> — {item.category_enc}
                            </span>
                                </div>

                            )
                        }
                    }
                )}
            </div>

            <h2>Неактивные:</h2>
            <div>
                {categories.map((item, i) =>{
                        if (!item.temp){
                            return (
                                <div key={i} className="b-category">
                            <span>
                                <b>{item.category_name}</b> — {item.category_enc}
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