
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.setAttribute("data-animation-show", "");
        }
        else if (getComputedStyle(entry.target).getPropertyValue("--animate-on-visible-replay") === "true"){
            entry.target.removeAttribute("data-animation-show");
        }
    });
});

const elements = document.querySelectorAll(".animation");
elements.forEach(element => {
    if (getComputedStyle(element).getPropertyValue("--animate-on-visible") === "true"){
        observer.observe(element)
    }
});
