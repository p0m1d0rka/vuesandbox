export default {
  // Вызывается при инициализации директивы, элемент в виртуальном дом
  bind(el, bindings, vnode) {
    console.log('bind')


    // модификторы хранятся в. Принимает true false
    const fontModifier = bindings.modifiers['font']
    if (fontModifier) {
      el.style.fontSize = '30px'
    }

    const delayModifier = bindings.modifiers['delay']
    let delay = 0
    if (delayModifier) {
      delay = 2000
    }
    setTimeout(() => {
      // el.style.color = 'red'
      const arg = bindings.arg
      el.style[arg] = bindings.value
    }, delay)
  },
  // Элемент вставлен в dom
  inserted(el, bindings, vnode){
    console.log('inserted')
  },
  // элемент перед обновлением
  update(el, bindings, vnode, oldVnode) {
    console.log('update')
  },
  // элемент после обновления
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('componentUpdated')
  },
  // убирается из дом дерева
  unbind() {
    console.log('unbind')
  }
}