import './style.css'
//import "C:/PWA24/intro-ts/src/temas-ts/01-tipos-bas.ts"
//import "C:/PWA24/intro-ts/src/temas-ts/02-interfaz-obj.ts"
//import "C:/PWA24/intro-ts/src/temas-ts/03-funciones.ts"
//import "C:/PWA24/intro-ts/src/temas-ts/04-desestructurar-obj.ts"
//import "C:/PWA24/intro-ts/src/temas-ts/05-desestructurar-funciones.ts"
//import "C:/PWA24/intro-ts/src/temas-ts/06-exportar-importar.ts"
//import "C:/PWA24/intro-ts/src/temas-ts/07-clases.ts"
//import "C:/PWA24/intro-ts/src/temas-ts/08-herencia.ts"
import "C:/PWA24/intro-ts/src/temas-ts/calcularArea.ts"
import "C:/PWA24/intro-ts/src/temas-ts/calcularVolumen.ts"

import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
