let b_at = {
    come_home : function(event) {
        console.log(event, event.target, event.type, event.target.id, event.target.onclick);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let btn_hd = `<button id="kb" onclick="b_at.come_home(event);">Click me</button>`;
    document.getElementById('root').innerHTML = btn_hd;
});