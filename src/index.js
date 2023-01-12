class API {
    #secure
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = method;
        this.#secure = url.startsWith('https') ? true : false;
    }
    isSecure() {
        return this.#secure;
    }
    updateUrl(newURL) {
        this.url = newURL;
        this.#secure = newURL.startsWith('https') ? true : false;
    }
}
const s = new API('http://api.com/api/hello')
console.log(s.isSecure()) // false// false

s.updateUrl('https://api.com/api/hello')
console.log(s.isSecure()) // true

console.log(s.url) // https://api. com/api/hello

console.log(s.method) // GET

console.log(s.secure) // undefined (because private field)

module.exports = { API }
