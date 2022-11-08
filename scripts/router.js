import Menu from './Menu.js';

const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                const href = event.target.getAttribute("href");
                Router.go(href);
            });
        });  
        // It listen for history changes
        window.addEventListener('popstate',  event => {
            Router.go(event.state.route, false);
        });
        // Process initial URL   
        Router.go(location.pathname);
    },    
    go: (route, addToHistory=true) => {
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        document.querySelectorAll("section.page")
            .forEach(s => s.style.display = "none");
        switch (route) {
            case "/":
                document.querySelector("section#home").style.display = "block";
                break;
            case "/order":
                document.querySelector("section#order").style.display = "block";
                break;
            default:
                if (route.startsWith("/product-")) {                
                    document.querySelector("section#details").style.display = "block";
                    Menu.renderDetails(route.substring(route.lastIndexOf("-")+1));
                }
                break;   
        }
        window.scrollX = 0;
    }
}

window.Router = Router; // make it "public"
export default Router;