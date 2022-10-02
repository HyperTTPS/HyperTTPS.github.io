
import {show, hide} from "./animation-functions.js";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            show(entry.target);
        }
        else if (getComputedStyle(entry.target).getPropertyValue("--animate-on-visible-replay") === "true"){
            hide(entry.target);
        }
    });
});

const elements = document.querySelectorAll(".animation");
elements.forEach(element => {
    let style = getComputedStyle(element);

    if (style.getPropertyValue("--animate-on-visible") === "true"){
        observer.observe(element)
    }
    else if (style.getPropertyValue("--animate-on-start") === "true"){
        show(element);
    }
});
