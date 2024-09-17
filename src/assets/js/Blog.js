const line = document.getElementById('line');
const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

let length = 0;
let direction = 1;

export function animate() {
    length += 2 * direction;
    if (length >= canvas.offsetWidth * 2 + canvas.offsetHeight * 2 || length <= 0) {
        direction *= -1;
    }
    if (length <= canvas.offsetWidth) {
        line.style.width = length + 'px';
        line.style.top = '0px';
        line.style.left = '0px';
    } else if (length <= canvas.offsetWidth + canvas.offsetHeight) {
        line.style.width = canvas.offsetWidth + 'px';
        line.style.top = length - canvas.offsetWidth + 'px';
        line.style.left = '0px';
    } else if (length <= canvas.offsetWidth * 2 + canvas.offsetHeight) {
        line.style.width = canvas.offsetWidth * 2 + canvas.offsetHeight - length + 'px';
        line.style.top = canvas.offsetHeight + 'px';
        line.style.left = length - canvas.offsetWidth - canvas.offsetHeight + 'px';
    } else {
        line.style.width = canvas.offsetWidth * 2 + canvas.offsetHeight * 2 - length + 'px';
        line.style.top = canvas.offsetHeight * 2 + canvas.offsetWidth - length + 'px';
        line.style.left = canvas.offsetWidth + 'px';
    }

    requestAnimationFrame(animate);
}

// animate();

// export {animate}