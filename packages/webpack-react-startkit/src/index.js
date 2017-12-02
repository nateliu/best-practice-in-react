const btn = document.querySelector('.likeButton');
const btnText = btn.querySelector('.likeText');
let isLiked = false;
btn.addEventListener('click',() => {
    isLiked = !isLiked;
    if(isLiked) {
        btnText.innerHTML = 'Unlike';
    } else {
        btnText.innerHTML = 'Like';
    }
}, false);
