let tags = document.querySelector('.tags');
let silly = document.querySelector('.sillyness');
let rotate = true;

setInterval(() => {
    if (rotate) {
        rotate = false;
        tags.style.opacity = 0;
        silly.style.opacity = 1;
    } else if (!rotate) {
        rotate = true;
        tags.style.opacity = 1;
        silly.style.opacity = 0;
    }
}, 4000);