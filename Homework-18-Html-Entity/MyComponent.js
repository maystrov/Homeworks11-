class Component {
    constructor(tagName, attributes, text, textColor, background) {
        this.el = document.createElement(tagName);
        this.tagName = tagName;
        this.text = text;
        this.attributes = attributes;
        this.color = textColor;
        this.background = background;
    }

    onClickChangeColor() {
        this.el.addEventListener('click', this.changeColor.bind(this))
    }
    changeColor() {
        let rndColor = '#' + Math.floor(Math.random() * 0x777 + 0x777).toString(16);
        this.el.style.background = rndColor;
    }
 
    print() {
        document.body.append(this.el);
        this.el.innerText = this.text;
        this.el.style.color = this.color;
        this.el.style.background = this.background;
        for (let key in this.attributes) {
            this.el.setAttribute(key, this.attributes[key]);
        }
    }

    hide() {
        this.el.style.opacity = '0'
    }

    show() {
        this.el.style.opacity = '1'
    }
   
}

const myComponent = new Component(
    'h1', { id: 'my-title', align: 'center' }, 'Component Text', 'green', 'pink'
)

myComponent.print()
myComponent.changeColor()
myComponent.onClickChangeColor()

