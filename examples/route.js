import Install from './docs/install.md'
import QuikeStart from './docs/quikeStart.md'
import Input from './docs/input.md'
import InputNumber from './docs/input-number.md'
import Button from './docs/button.md'
import Container from './docs/container.md'
import Icon from './docs/icon.md'
import Radio from './docs/radio.md'
const routes = [
  {
    path: '/',
    component: Install,
    name: 'default'
  },
  {
    path: '/guide/install',
    name: 'Install',
    component: Install
  },
  {
    path: '/guide/quikeStart',
    name: 'quikeStart',
    component: QuikeStart
  },
  {
    path: '/input',
    name: 'input',
    component: Input
  }, 
  {
    path: '/inputNumber',
    name: 'inputNumber',
    component: InputNumber
  }, 
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/container',
    name: 'container',
    component: Container
  },
  {
    path: '/icon',
    name: 'icon',
    component: Icon
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio
  },
]

export default routes
