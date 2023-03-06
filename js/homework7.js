const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}


const span = document.querySelector(".color")
const btn = document.querySelector(".change-color")

const changeColorOnClick = () => {
  const color = getRandomHexColor()
  span.textContent = color
  document.body.style.backgroundColor = color
}
btn.addEventListener("click", changeColorOnClick)


