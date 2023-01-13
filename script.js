let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', () => {
  res.innerHTML += 1
})
btn0.addEventListener('click', () => {
  res.innerHTML += 0
})
btnSum.addEventListener('click', () => {
  res.innerHTML += '+'
})
btnSub.addEventListener('click', () => {
  res.innerHTML += '-'
})
btnMul.addEventListener('click', () => {
  res.innerHTML += '*'
})
btnEql.addEventListener('click', () => {
  res.innerHTML =  eval(res.innerHTML)
})
btnClr.addEventListener('click', () => {
  res.innerHTML += ''
})