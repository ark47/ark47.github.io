// console.log(tag.textContent);

let tag = document.querySelector('.tagline')
let wide = window.innerWidth;

if (wide < 482) {
    tag.textContent = 'Developer | Designer | Artist';
} else {
    tag.textContent = 'Developer | Designer | Artist | 4th Grade Spelling Bee Champion'
}