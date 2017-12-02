class LikeButton {
    render() {
        return `
        <button class="likeButton">
            <span class="likeText">Like</span>
        </button>
        `;
    }
}

const likeArea = document.querySelector('.likeArea');
const btn = new LikeButton();
likeArea.innerHTML = btn.render();
