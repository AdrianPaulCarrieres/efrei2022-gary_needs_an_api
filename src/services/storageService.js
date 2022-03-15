function setElement(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getElement(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

export { setElement, getElement};