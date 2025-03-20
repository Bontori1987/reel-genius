// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    console.log("Routing to:", event.target.href);
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

console.log(document.getElementById("main-page").innerHTML);


const routes = {
    "/reel-genius/about": "/reel-genius/about.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    console.log("pathname:", path);
    console.log("Fetching route:", route);
    
    // if(route) {
    //     const html = await fetch(route).then((data) => data.text());
    //     document.getElementById("main-page").innerHTML = html;
    // } else {
    //     console.log('NOT OK')
    // }

    
    const handleLocation = async () => {
        const path = window.location.pathname;
        const route = routes[path] || routes[404];
    
        console.log("pathname:", path);
        console.log("Fetching route:", route);
    
        if (route) {
            try {
                const html = await fetch(route).then((res) => res.text());
                document.getElementById("main-page").innerHTML = html;
            } catch (error) {
                console.error("Failed to fetch:", error);
            }
        }
    };
    
};

window.onpopstate = handleLocation;
window.route = route;