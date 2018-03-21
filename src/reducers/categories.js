import InitialState from './../initialstate';

const categories = (state = InitialState.categories, action) => {
    let obj={};
    switch(action.type) {
        case 'ADD_CATEGORY':
            return state.concat(
                {
                    id: action.id,
                    name: action.name,
                    anchor_link: action.enc,
                    temp: action.temp
                }
            );
        default:
            return state;
    }
};

export default categories;