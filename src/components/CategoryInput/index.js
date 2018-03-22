import React, {Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import './style/style.scss';

class CategoryInput extends Component{
    constructor(props){
        super(props);
        this.addCategory = this.addCategory.bind(this);
    }

    addCategory() {
        let {category_id, addCategory} = this.props;

        let cat_id = category_id+1;
        let cat_name = ReactDOM.findDOMNode(this.refs.category_add).value;
        let cat_enc = ReactDOM.findDOMNode(this.refs.category_enc).value;
        let cat_temp = ReactDOM.findDOMNode(this.refs.category_temp).checked;
        addCategory(cat_id, cat_name, cat_enc, cat_temp);
    }
    render(){
        return(
            <div className='category-input'>
                <div className='category-input__title'>CategoryInput component</div>
                <p>
                    <label>Название категории<br/>
                        <input ref="category_add" size="20" type="text" defaultValue="" />
                    </label>
                </p>
                <p>
                    <label>якорная ссылка<br/>
                        <input ref="category_enc" type="text" defaultValue=""/>
                    </label>
                </p>
                <div>
                    <label>
                        <input ref="category_temp" type="checkbox" defaultChecked={true} />Активная
                    </label>
                </div>
                <p>
                    <input ref="category_submit" onClick={this.addCategory} type= "submit" value="Добавить" />
                </p>
            </div>
        )
    }
}

export default CategoryInput;