function jema (obj) {
    this.called = false;
    this.items = [];
    this.actions = {};

    if (!this.called) {
        console.log('now add event listner to the body tag');
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    jema({
        'name':'kb', 'event':'click', 'action': function () {
            console.log('clicked');
        }
    });

    jema({
        'name':'jd', 'event':'click', 'action': function () {
            console.log('clicked');
        }
    });

    let btn_hd = `<button id="kb">Click me</button> <button id="jd">for jd</button>`;
    document.getElementById('root').innerHTML = btn_hd;
});