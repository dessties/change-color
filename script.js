function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    let rComponent = getRandomInt(0, 255);
    let gComponent = getRandomInt(0, 255);
    let bComponent = getRandomInt(0, 255);
    return { r: rComponent, g: gComponent, b: bComponent };
};

document.body.addEventListener("click", () => {
    let color = randomColor();
    let rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    document.body.style.backgroundColor = rgbColor;
});

