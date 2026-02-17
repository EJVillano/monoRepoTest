import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>"${import.meta.env.VITE_API_URL}"</h1>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
const button = document.querySelector<HTMLButtonElement>('#counter')

button?.addEventListener('click', async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/test`)
    const data = await res.json()
    alert(data.message)
  } catch (err) {
    console.error(err)
    alert('Error connecting to server')
  }
})
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
