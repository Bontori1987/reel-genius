const route = (event) => {
    event = event || window.event;
    console.log("Routing to:", event.target.href);
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/reel-genius/about.html": "/reel-genius/about.html",
    "/reel-genius/images.html": "/reel-genius/images.html",
    "/reel-genius/pages/videos.html": "/reel-genius/pages/videos.html",
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
