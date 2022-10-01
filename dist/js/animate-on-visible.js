var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-animation-show", "");
        }
        else if (getComputedStyle(entry.target).getPropertyValue("--animate-on-visible-replay") === "true") {
            entry.target.removeAttribute("data-animation-show");
        }
    });
});
var elements = document.querySelectorAll(".animation");
elements.forEach(function (element) {
    if (getComputedStyle(element).getPropertyValue("--animate-on-visible") === "true") {
        observer.observe(element);
    }
});
//# sourceMappingURL=animate-on-visible.js.map