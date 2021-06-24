function jema () {
    $base = this;
    this.called = false;
    this.items = [];
    this.actions = {};

    if (!this.called) {
        document.getElementById('body').addEventListener('click', function (e) {
            $base.checkForAction({'type':e.type, 'evt':e});
        });
        this.called = true;
    }
}

jema.prototype.fire = function (obj) {
    $base = this;
    let {name, type, action} = obj;
    this.items.push(name);
    this.actions[name] = {'type':type, 'action':action};
}

jema.prototype.checkForAction = function (dts) {
    let {type, evt} = dts;
    let id = evt.target.id;

    if (this.items.includes(id) && this.actions[id].type === type) {
        this.actions[id].action(evt);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let lema = new jema();
    let btn_hd = `<button id="kb">Click me</button> <button id="jd">for jd</button> <button id="dembele">for dembele</button>`;

    lema.fire({
        'name':'kb', 'type':'click', 'action': function (event) {
            console.log(event, 'kb is on fire');
            document.getElementById('root').innerHTML += btn_hd;
        }
    });

    lema.fire({
        'name':'jd', 'type':'click', 'action': function (event) {
            console.log(event, 'jd is the man');
            event.target.style.display = 'none';
        }
    });

    document.getElementById('root').innerHTML = btn_hd;
});