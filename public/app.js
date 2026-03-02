const images = ['mina1.png', 'mina2.png', 'mina3.png', 'mina4.png'];
const targetImage = document.querySelector('.profile-pic img');
let i = 1;

targetImage.addEventListener('click', () => {
    targetImage.style.opacity = '0';
    setTimeout(() => {
        if (i >= images.length) i = 0;
        targetImage.src = '/images/' + images[i];
        i++;
        targetImage.style.opacity = '1';
    }, 300);
});


const stars = document.querySelectorAll('.rating-stars li i');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, idx) => {
            if (idx <= index) {
                s.classList.replace('fa-regular', 'fa-solid');
                s.style.color = 'var(--star-color)';
            } else {
                s.classList.replace('fa-solid', 'fa-regular');
                s.style.color = '#ccc';
            }
        });
    });
});