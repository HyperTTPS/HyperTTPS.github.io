
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.setAttribute("data-animation-show", "");
        }
    });
});

const elements = document.querySelectorAll(".animation[data-animation-play-on-visible]");
elements.forEach(element => observer.observe(element));
