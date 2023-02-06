function isMobile() {
    return navigator.userAgent.toLowerCase().match(/mobile/i);
}

window.addEventListener("load", () => {
    if (!isMobile()) {
        console.log("is mobile")
        var elements = document.getElementsByClassName("worker-app-link");
        console.log(elements);
        for (var i = 0; i < elements.length; i++) {
            console.log(elements[i].href);
            elements[i].href = "";
            elements[i].addEventListener("click", function (event) {
                event.preventDefault()
                alert("You need a mobile device to download the Pony Up Worker App");
            });
        }
    }
})