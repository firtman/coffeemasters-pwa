import Menu from './Menu.js';
import Order from './Order.js';
import Router from './Router.js';

window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    Menu.load();
    Order.render();
 } );
