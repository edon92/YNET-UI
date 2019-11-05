import Install from './docs/install.md'
import QuikeStart from './docs/quikeStart.md'
import Input from './docs/input.md'
import InputNumber from './docs/input-number.md'
import Button from './docs/button.md'
import Container from './docs/container.md'
import Icon from './docs/icon.md'
import Radio from './docs/radio.md'
import NavMenu from './docs/navMenu.md'
import Select from './docs/select.md'
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
  {
    path: '/navMenu',
    name: 'navMenu',
    component: NavMenu
  },
  {
    path: '/select',
    name: 'select',
    component: Select
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import(/* webpackChunkName: "switch" */'./docs/switch.md')
  },
  {
    path: '/collapse',
    name: 'collapse',
    component: () => import(/* webpackChunkName: "collapse" */'./docs/collapse.md')
  },
]

export default routes
