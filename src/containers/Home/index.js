import React, { Component }from 'react';
import {connect} from 'react-redux';
import actions from './../../actions/';
import {bindActionCreators} from 'redux';
import './style/style.scss';

import CategoriesList from './../../components/CategoriesList'
import CategoryInput from './../../components/CategoryInput'

const mapStateToProps = (state) => ({
    categories: state.categories,
    category_id: Date.now().toString()
});

const mapDispatchToProps = (dispatch) => ({
    addCategory: bindActionCreators(actions.categories.addCategory, dispatch),
});

class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        return (

            <div className='home'>
                <div className='home__title'>Home container</div>
                <CategoriesList {...this.props}/>
                <CategoryInput {...this.props}/>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


