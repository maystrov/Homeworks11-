class Component {
    constructor(tagName, attributes, text, color ) {
        this.tagName = tagName;
        this.text = text;
        this.attributes = attributes;
        this.color = color;
    }

    createComponent() {
        let el = document.createElement(this.tagName);
        document.body.append(el);
        el.innerText = this.text;
        el.style.color = this.color;
        for (let key in this.attributes) {
            el.setAttribute(key, this.attributes[key]);
        }
    }
    
}

const myComponent = new Component('div', {id: 'my-div',  align: 'center' },'Component Text', 'blue')

 myComponent.createComponent()