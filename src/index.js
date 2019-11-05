import Input from './components/input'
import InputNumber from './components/input-number'
import Button from './components/button'
import ButtonGroup from './components/button/button-group'
import Container from './components/container'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Aside from './components/aside'
import Icon from './components/icon'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import RadioButton from './components/radio-button'
import ScrollBar from './components/scrollbar'
import Tag from './components/tag'
import Menu from './components/menu'
import MenuItem from './components/menu/menu-item'
import MenuItemGroup from './components/menu/menu-item-group'
import Submenu from './components/menu/submenu'
import Tooltip from './components/tooltip'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'
import Option from './components/option'
import OptionGroup from './components/option-group'
import Select from './components/select'
import Switch from './components/switch'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

function install (Vue) {
  Vue.component(Input.name, Input)
  Vue.component(Button.name, Button)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Container.name, Container)
  Vue.component(Header.name, Header)
  Vue.component(Main.name, Main)
  Vue.component(Footer.name, Footer)
  Vue.component(Aside.name, Aside)
  Vue.component(Icon.name, Icon)
  Vue.component(Radio.name, Radio)
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(RadioButton.name, RadioButton)
  Vue.component(InputNumber.name, InputNumber)
  Vue.component(ScrollBar.name, ScrollBar)
  Vue.component(Tag.name, Tag)
  Vue.component(Menu.name, Menu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(MenuItemGroup.name, MenuItemGroup)
  Vue.component(Submenu.name, Submenu)
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
  Vue.component(Option.name, Option)
  Vue.component(OptionGroup.name, OptionGroup)
  Vue.component(Select.name, Select)
  Vue.component(Switch.name, Switch)
}

export default {
  install,
  Input,
  Button,
  ButtonGroup,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
  Radio,
  RadioGroup,
  RadioButton,
  InputNumber,
  ScrollBar,
  Tag,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Tooltip,
  Collapse,
  CollapseItem,
  Option,
  OptionGroup,
  Select,
  Switch,
}
