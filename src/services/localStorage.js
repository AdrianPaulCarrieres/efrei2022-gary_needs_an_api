function setInLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getInLocalStorage(key) {
    return localStorage.getItem(key);
}

export { setInLocalStorage, getInLocalStorage };