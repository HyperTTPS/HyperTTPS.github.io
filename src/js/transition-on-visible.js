
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.setAttribute("data-transition-show", "");
        }
    });
});

const elements = document.querySelectorAll(".transition[data-transition-on-visible]");
elements.forEach(element => observer.observe(element));
