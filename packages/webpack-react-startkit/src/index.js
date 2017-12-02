const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

const mount = (componet,wrapper) => {
    wrapper.appendChild(componet._renderDOM());
    componet.onStateChange = (oldEl,newEl) => {
        wrapper.insertBefore(newEl,oldEl);
        wrapper.removeChild(oldEl);
    }
}

class Component {
    setState(state){
        const oldEl = this.el;
        this.state = state;
        this.el = this._renderDOM()
        if(this.onStateChange) {
            this.onStateChange(oldEl,this.el);
        }
    }

    _renderDOM() {
        this.el = createDOMFromString(this.render());
        if(this.onClick) {
            this.el.addEventListener('click',this.onClick.bind(this),false);
        }
        return this.el;
    }

}

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isLiked:false};
    }
   
    onClick = () => {
        this.setState(
            {isLiked:!this.state.isLiked}
        );
    }

    render() {
        return `
        <button class="likeButton">
            <span class="likeText">${this.state.isLiked ? 'Unlike' : 'Like'}</span>
        </button>
        `;
    }
}

const likeArea = document.querySelector('.likeArea');
const btn = new LikeButton();
mount(btn,likeArea);
