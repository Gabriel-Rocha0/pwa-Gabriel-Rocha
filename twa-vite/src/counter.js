export function setupCounter(element, onChange) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Contador: ${counter}`
    onChange?.(counter)
  }
  element.addEventListener('click', () => setCounter(counter - 1))
  setCounter(0)
}
