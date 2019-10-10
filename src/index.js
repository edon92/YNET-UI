import Input from './components/input'
import Button from './components/button'
import Container from './components/container'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Aside from './components/aside'
import Icon from './components/icon'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

function install (Vue) {
  Vue.component(Input.name, Input)
  Vue.component(Button.name, Button)
  Vue.component(Container.name, Container)
  Vue.component(Header.name, Header)
  Vue.component(Main.name, Main)
  Vue.component(Footer.name, Footer)
  Vue.component(Aside.name, Aside)
  Vue.component(Icon.name, Icon)
}

export default {
  install,
  Input,
  Button,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
}
