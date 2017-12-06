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
            state.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break;
    }
}

const renderApp = (state) => {
    console.log('render app...');
    renderTitle(state.title);
    renderContent(state.content);
}

const renderTitle = (title) => {
    console.log('render title...');
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

const renderContent = (content) => {
    console.log('render content...');
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}

renderApp(appState);
stateChanger(appState, { type: 'UPDATE_TITLE_TEXT', text: 'Here is the updated title' })
stateChanger(appState, { type: 'UPDATE_TITLE_COLOR', color: 'green' });
renderApp(appState);