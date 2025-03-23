'use strict'
import context from "./components/context.js";
import menu from "./components/menu.js";

document.addEventListener('DOMContentLoaded', function() {
    
    window.addEventListener('click', function(event) {
        menu.choose(event);
        context.choose(event);
    });
});