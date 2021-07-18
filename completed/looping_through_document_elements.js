window.addEventListener('DOMContentLoaded', (event) => {
    let john = 'we done finish ohh'
    Object.prototype.convertMan = function (action) {
        this.forEach(element => {
            if (action == 'hide_div') { element.style.display = 'none'; }
            else if (action == 'show_div') { element.style.display = 'block'; }
        });
    }

    // console.log(Object.prototype )
    let amaka = document.querySelectorAll('.amaka')
    amaka.convertMan('hide_div')

    document.querySelector('.show_me').addEventListener('click', () => {
       amaka.convertMan('show_div');
    })

    // the html code below
    /*<body>
        <div class="amaka">num 1</div>
        <div class="amaka">num 2</div>
        <div class="amaka">num 3 </div>
        <div class="amaka">num 4</div>
        <button class="show_me">show me</button>
    </body> */
});