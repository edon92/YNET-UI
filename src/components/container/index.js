import Container from './container'
Container.install = (Vue) => {
  Vue.component(Container.name, Container)
}

export default Container
