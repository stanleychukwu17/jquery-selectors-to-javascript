function jema () {
    this.called = false;
    this.items = [];
    this.actions = {};

    if (!this.called) { this.called = true; }
}

jema.prototype.fire = function (obj) {
    console.log(this.called)
}

let lema = new jema();

document.addEventListener("DOMContentLoaded", function(event) {
    lema.fire({
        'name':'kb', 'event':'click', 'action': function () {
            console.log('clicked');
        }
    });

    lema.fire({
        'name':'jd', 'event':'click', 'action': function () {
            console.log('clicked');
        }
    });

    let btn_hd = `<button id="kb">Click me</button> <button id="jd">for jd</button>`;
    document.getElementById('root').innerHTML = btn_hd;
});