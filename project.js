const route = (event) => {

    event = event || window.event;
    event.preventDefault();
    console.log("Routing to:", event.target.href);
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/":"/index.html",
    "pages/videos.html": "/pages/videos.html",
    "pages/images.html": "/pages/images.html",
    "pages/about.html": "/pages/about.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    console.log("pathname:", path);
    console.log("Fetching route:", route);
    console.log("Routes:",route);
    
    if(route) {
        const html = await fetch(route).then((respond) => respond.text());
        document.getElementById("main-page").innerHTML = html;
        console.log(document.getElementById("main-page").innerHTML);
    } else {
        console.log('NOT OK')
    }
};

window.onpopstate = handleLocation;
window.route = route;
