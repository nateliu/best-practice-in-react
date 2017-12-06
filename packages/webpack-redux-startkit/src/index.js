const appState = {
    title: {
        text: 'Here is the title',
        color: 'red'
    },
    content: {
        text: 'Here is the content',
        color: 'blue'
    }
}

const stateChanger = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            };
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            };
        default:
            state;
    }
}

const createStore = (state, stateChanger) => {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (stateHere, action) => {
        state = stateChanger(stateHere, action);
        listeners.map(listener => listener());
    }
    return { getState, dispatch, subscribe };
}

const renderApp = (state, oldState = {}) => {
    if (state === oldState) return;
    console.log('render app...');
    renderTitle(state.title, oldState.title);
    renderContent(state.content, oldState.content);
}

const renderTitle = (title, oldTitle = {}) => {
    if (title === oldTitle) return;
    console.log('render title...');
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

const renderContent = (content, oldContent = {}) => {
    if (content === oldContent) return;
    console.log('render content...');
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}

renderApp(appState);
const store = createStore(appState, stateChanger);
let oldState = store.getState();
store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState, oldState);
    oldState = newState;
});
renderApp(store.getState());
store.dispatch(store.getState(), { type: 'UPDATE_TITLE_TEXT', text: 'Here is the updated title' })
store.dispatch(store.getState(), { type: 'UPDATE_TITLE_COLOR', color: 'green' });