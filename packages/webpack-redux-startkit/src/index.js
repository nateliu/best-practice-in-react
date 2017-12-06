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