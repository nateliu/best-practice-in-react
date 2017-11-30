import { createStore } from 'redux'

// @Reducer
const addItem = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.text, ...state] ;
        default: return state
    }
}


// @Store
const store = createStore(addItem, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// @Render
const render = () => {
    const items = store.getState().map(item => ( (item) ? `<li>${item}</li>` : '' )) ;

    document.getElementById('itemlist').innerHTML = `<ul>${items.join('')}</ul>`
}

//render it first
render();

//subscribe it
store.subscribe(render);

// Listener
document.getElementById('itemadd') .addEventListener('click', () => {
    const itemText = document.getElementById('itemtext');
    store.dispatch({ type: 'ADD_ITEM', text: itemText.value }) ;
    itemText.value = ''
});

