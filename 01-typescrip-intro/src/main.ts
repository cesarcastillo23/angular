import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import './topics/1-basic-types'
// import './topics/2-object-interface.ts'
// import './topics/3-funtions.ts'
// import './topics/4-homework.ts'
//import './topics/5-basic-destrucuring.ts'
//import './topics/6-function-destructuring.ts'
// import './topics/7-import-export.ts'
// import './topics/8-classes.ts'
// import './topics/9-generics.ts'
// import './topics/10-decorators.ts'
import './topics/11-optional-chainin.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  hola mundo
`


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
