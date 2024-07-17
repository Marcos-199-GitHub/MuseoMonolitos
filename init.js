AFRAME.registerComponent('inverted-look-controls', {
    schema: {
        enabled: {default: true},
        reverseMouseDrag: {default: true},
        reverseTouchDrag: {default: true},
    },
    init: function () {
        const el = this.el;
        const data = this.data;
        const originalLookControls = el.components['look-controls'];

        if (!originalLookControls) { return; }

        el.removeAttribute('look-controls');
        el.setAttribute('look-controls', `enabled: ${data.enabled}; reverseMouseDrag: ${data.reverseMouseDrag}; reverseTouchDrag: ${data.reverseTouchDrag}`);

        el.addEventListener('componentinitialized', evt => {
            if (evt.detail.name !== 'look-controls') { return; }
            const lookControls = el.components['look-controls'];

            if (lookControls) {
                lookControls.onMouseMove = function (evt) {
                    const movementX = data.reverseMouseDrag ? -evt.movementX : evt.movementX;
                    const movementY = data.reverseMouseDrag ? -evt.movementY : evt.movementY;
                    this.yawObject.rotation.y -= movementX * 0.002;
                    this.pitchObject.rotation.x -= movementY * 0.002;
                    this.pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, this.pitchObject.rotation.x));
                };

                lookControls.onTouchMove = function (evt) {
                    const deltaX = data.reverseTouchDrag ? -evt.touches[0].pageX : evt.touches[0].pageX;
                    const deltaY = data.reverseTouchDrag ? -evt.touches[0].pageY : evt.touches[0].pageY;
                    this.yawObject.rotation.y -= deltaX * 0.002;
                    this.pitchObject.rotation.x -= deltaY * 0.002;
                    this.pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, this.pitchObject.rotation.x));
                };
            }
        });
    }
});
