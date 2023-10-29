const button = document.getElementById("changeColorButton");

button.addEventListener("click", () => {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#33A7FF", "#FF33A7"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
