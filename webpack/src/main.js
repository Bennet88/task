import App from './App.vue'

import { footer } from './footer.js'
import { tab } from './tab.js'

tab()
footer()

import './style/index.css'
import './style/index.less'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)
