const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class LikeButton {
    constructor() {
        this.state = {isLiked:false};
    }

    setState(state){
        this.state = state;
        this.el = this.render()
    }

    changeLikeText = () => {
        this.setState(
            {isLiked:!this.state.isLiked}
        );
    }

    render() {
        this.el = createDOMFromString(`
        <button class="likeButton">
            <span class="likeText">${this.state.isLiked ? 'Unlike' : 'Like'}</span>
        </button>
        `);
        this.el.addEventListener('click',this.changeLikeText.bind(this),false)
        return this.el;
    }
}

const likeArea = document.querySelector('.likeArea');
const btn = new LikeButton();
likeArea.appendChild(btn.render());
