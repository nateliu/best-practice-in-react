const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class LikeButton {
    constructor() {
        this.state = {isLiked:false};
    }

    changeLikeText = () => {
        this.state.isLiked = !this.state.isLiked;
        const likeText = this.el.querySelector('.likeText');
        likeText.innerHTML = this.state.isLiked ? 'Unlike' : 'Like';
    }

    render() {
        this.el = createDOMFromString(`
        <button class="likeButton">
            <span class="likeText">Like</span>
        </button>
        `);
        this.el.addEventListener('click',this.changeLikeText.bind(this),false)
        return this.el;
    }
}

const likeArea = document.querySelector('.likeArea');
const btn = new LikeButton();
likeArea.appendChild(btn.render());
