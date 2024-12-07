function tag(name, ...children) {
    const result = document.createElement(name);

    for (const child of children) {
        if (typeof(child) === "string") {
            result.appendChild(document.createTextNode(children));
        } else {
            result.appendChild(child);
        }
    }

    result.attribute = function (name, value) {
        this.setAttribute(name, value);
        return this;
    }

    result.clicked = function(callback) {
        this.onclick = callback;
        return this;
    }

    return result;
}
