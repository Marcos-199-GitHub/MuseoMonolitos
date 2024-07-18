AFRAME.registerComponent('button-listener', {
    init: function () {
        this.el.addEventListener('click', function () {
            window.location.href = './monolitos#' + this.id;
        });
    },
    remove: function () {
        this.el.removeEventListener('click', function () {
            window.location.href = './monolitos#' + this.id;
        });
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        console.log('La tecla "a" ha sido presionada.');
        // Aquí puedes agregar cualquier otra acción que desees realizar
    }
});
