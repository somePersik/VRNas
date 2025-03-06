'use strict'

let context = {
    open: function(button, body) {
        button.classList.add('_active');
        body.classList.add('_opened');
        document.body.style.overflow = 'hidden';
    },
    close: function(button, body) {
        button.classList.remove('_active');
        body.classList.remove('_opened');
        document.body.style.overflow = 'auto';
    },
    closeUnknowns: function() {
        document.querySelectorAll('[data-menu]._opened').forEach(item => item.classList.remove('_opened'));
        document.querySelectorAll('[data-open-menu]._active').forEach(item => item.classList.remove('_active'));
    },
    choose: function (event) {
        if (event.target.closest('[data-open-menu]')) {
            const touchElement = event.target.closest('[data-open-menu]');
            const body = document.querySelector(`[data-menu="${touchElement.dataset.openMenu}"]`);
            if (document.querySelector('[data-menu]._opened')) {
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
        else if (event.target.closest('[data-close-menu]')) {
            const touchElement = event.target.closest('[data-close-menu]');
            const button = document.querySelector(`[data-open-menu="${touchElement.dataset.closeMenu}"]`);
            const body = document.querySelector(`[data-menu="${touchElement.dataset.closeMenu}"]`);

            this.close(button, body);
        }
        else if (document.querySelector('[data-menu]._opened') && !event.target.closest('[data-menu]')) {
            this.closeUnknowns();
        }
    }
}

export default context;