// obtain the body
const bodyEl = document.querySelector("body")

//mousemove event
bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    //different icon sizes
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    //set time
    bodyEl.appendChild(spanEl)
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});