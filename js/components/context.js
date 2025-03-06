'use strict'

let context = {
    open: function(button, body) {
        button.classList.add('_active');
        body.classList.add('_opened');
    },
    close: function(button, body) {
        button.classList.remove('_active');
        body.classList.remove('_opened');
    },
    closeUnknowns: function() {
        document.querySelectorAll('[data-context]._opened').forEach(item => item.classList.remove('_opened'));
        document.querySelectorAll('[data-open-context]._active').forEach(item => item.classList.remove('_active'));
    },
    choose: function (event) {
        if (event.target.closest('[data-open-context]')) {
            const touchElement = event.target.closest('[data-open-context]');
            const body = document.querySelector(`[data-context="${touchElement.dataset.openContext}"]`);
            if (document.querySelector('[data-context]._opened')) {
                if (touchElement.classList.contains('_active') && body.classList.contains('_opened')) {
                    this.close(touchElement, body);
                }
                else {
                    this.closeUnknowns();
                    this.open(touchElement, body);
                }
            }
            else {
                this.open(touchElement, body);
            }
        }
        else if (event.target.closest('[data-close-context]')) {
            const touchElement = event.target.closest('[data-close-context]');
            const button = document.querySelector(`[data-open-context="${touchElement.dataset.closeContext}"]`);
            const body = document.querySelector(`[data-context="${touchElement.dataset.closeContext}"]`);

            this.close(button, body);
        }
        else if (document.querySelector('[data-context]._opened') && !event.target.closest('[data-context]')) {
            this.closeUnknowns();
        }
    }
}

export default context;