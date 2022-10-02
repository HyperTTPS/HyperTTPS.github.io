
// Shows an element with an animation.
export function show(element: Element){
    element.setAttribute("data-animation-show", "");
}

// Hides an element with an animation.
export function hide(element: Element){
    element.removeAttribute("data-animation-show");
}
