import { noop } from './util/index.js'
import * as Mixin from './util/mixin'
import Element from './Element'

export default class HTMLElement extends Element {
    className = ''
    childern = []

    insertBefore = noop
    focus = noop
    blur = noop

    innerHTML = ''

    constructor(tagName = '', level) {
        super()
        this.tagName = tagName.toUpperCase()

        Mixin.parentNode(this, level);
        Mixin.style(this);
        Mixin.classList(this);
        Mixin.clientRegion(this);
        Mixin.offsetRegion(this);
        Mixin.scrollRegion(this);
    }

    setAttribute(name, value) {
        this[name] = value
    }

    getAttribute(name) {
        return this[name]
    }

    appendChild() {

    }

    removeChild() {

    }
}
