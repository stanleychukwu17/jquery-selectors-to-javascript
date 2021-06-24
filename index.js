function jema (element) {
    this.element = element;
    console.log(element);
}

document.addEventListener("DOMContentLoaded", function(event) {
    jema('kb');
    let btn_hd = `<button id="kb">Click me</button>`;
    document.getElementById('root').innerHTML = btn_hd;
});