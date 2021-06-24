function jema () {
    $base = this;
    this.called = false;
    this.items = [];
    this.actions = {};

    if (!this.called) {
        document.getElementById('body').addEventListener('click', function (e) {
            $base.checkForAction({'type':e.type, 'target':e.target});
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
    let {type, target} = dts;
    let id = target.id;

    if (this.items.includes(id)&& this.actions[id].type === type) {
        console.log('e dey inside');
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let lema = new jema();

    lema.fire({
        'name':'kb', 'type':'click', 'action': function () {
            console.log('kb is on fire');
        }
    });

    lema.fire({
        'name':'jd', 'type':'click', 'action': function () {
            console.log('jd is on fire');
        }
    });

    let btn_hd = `<button id="kb">Click me</button> <button id="jd">for jd</button> <button id="dembele">for dembele</button>`;
    document.getElementById('root').innerHTML = btn_hd;
});