const text = document.querySelector('.text')
const textArray = ['Fabala....', 'Developer.', 'Programmer', 'Youtuber']
let index = 0
getIndex = () => {
  if (index > textArray.length - 1) {
    index = 0
  }
  return index++
}

function textToDisplay() {
  const index = getIndex()
  text.setAttribute('data-text', `${textArray[index]}`)
  text.textContent = `${textArray[index]}`
}
setInterval(textToDisplay, 4000)
