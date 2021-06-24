/*
You can use this ->
when an element is not readily avialable in the dom, or when data need to be fetched from an API before the elements are rendered,
and maybe you're working with purely javascript and not using a framework like react which would have made this easier.
*/

let b_at = {
    come_home : function(event) {
        console.log(event, event.target, event.type, event.target.id, event.target.onclick);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    let btn_hd = `<button id="kb" onclick="b_at.come_home(event);">Click me</button>`;
    document.getElementById('root').innerHTML = btn_hd;
});