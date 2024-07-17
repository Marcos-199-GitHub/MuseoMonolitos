AFRAME.registerComponent('button-listener', {
    init: function () {
        this.el.addEventListener('collide', function () {
            alert('Botón clickeado!');
        });
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        console.log('La tecla "a" ha sido presionada.');
        // Aquí puedes agregar cualquier otra acción que desees realizar
    }
});
