import Menu from "./Menu.js";
import Order from "./Order.js";
import Router from "./Router.js";

//> Request persistence storage

(async function () {
  if (navigator.storage && navigator.storage.persist) {
    if (!(await navigator.storage.persist())) {
      const result = await navigator.storage.persist();

      console.log(`Persistent request: returned ${result}`);
    }
  }
})();

//> check for estimated quota

(async function () {
  if (navigator.storage && navigator.storage.estimate) {
    const quota = await navigator.storage.estimate();

    console.log(`Estimated quota: ${quota.quota}`);
    console.log(`Quota used: ${quota.usage}`);
  }
})();

window.addEventListener("DOMContentLoaded", () => {
  Router.init();
  Menu.load();
  Order.render();
});
