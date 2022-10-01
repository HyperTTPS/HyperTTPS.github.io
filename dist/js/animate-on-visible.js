var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-animation-show", "");
        }
    });
});
var elements = document.querySelectorAll(".animation[data-animation-play-on-visible]");
elements.forEach(function (element) { return observer.observe(element); });
//# sourceMappingURL=animate-on-visible.js.map