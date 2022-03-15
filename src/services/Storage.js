function setElement(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getElement(key) {
    return JSON.parse(localStorage.getItem(key))
}

function pushElement(key, value) {
    const l = [...getElement(key), value];
    setElement(key, l);
}

export { setElement, getElement, pushElement};