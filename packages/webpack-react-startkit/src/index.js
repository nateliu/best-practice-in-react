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
        const oldEl = this.el;
        this.state = state;
        this.el = this.render()
        if(this.onStateChange) {
            this.onStateChange(oldEl,this.el);
        }
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
btn.onStateChange = (oldEl,newEl) => {
    likeArea.insertBefore(newEl,oldEl);
    likeArea.removeChild(oldEl);
}
