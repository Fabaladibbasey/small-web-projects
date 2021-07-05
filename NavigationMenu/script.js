const list = document.querySelectorAll('.list')

const activeLink = (e) => {
  list.forEach((item) => item.classList.remove('active'))

  let targetClass = e.target
  while (targetClass.classList.value !== 'list') {
    targetClass = targetClass.parentElement
  }

  targetClass.classList.add('active')
}

list.forEach((item) => item.addEventListener('click', activeLink))
