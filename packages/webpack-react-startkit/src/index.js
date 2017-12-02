const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class LikeButton {
    render() {
        this.el = createDOMFromString(`
        <button class="likeButton">
            <span class="likeText">Like</span>
        </button>
        `);
        this.el.addEventListener('click',() =>console.log('I am a click log event!'),false)
        return this.el;
    }
}

const likeArea = document.querySelector('.likeArea');
const btn = new LikeButton();
likeArea.appendChild(btn.render());
