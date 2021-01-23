const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// Adds the class "hover-left/right" to the left & right side

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
});

// Removes the clase "hover-left/right" from the left & right side

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
});