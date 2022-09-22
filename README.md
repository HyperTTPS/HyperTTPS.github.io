
# Design Decisions
This section will detail the decisions that was made regarding the design of the website's systems - the graphical design will not be discussed here.

## Normalizing CSS
A normalize scss file was created to reduce browser inconsistencies so it's easier to provide a consistent experience across all devices. The normalization used is a copy of the opinionated version of [normalize.css](https://github.com/csstools/normalize.css). 

I thought about using a reset css file instead but a reset file aims to set all css values to nothing so that you have to manually write all css rules that you want applied. This seems like unnecessary work when an opinionated css normalization sets the values to sensible defaults so it isn't necessary to write the extra css rules manually.

# Compilation Setup
This section will detail how the different types of files should be compiled, where the resulting compiled file should be placed and more.

## SCSS
Have your scss compile minified css files from /src/scss to /dist/css with the extension ".min.css". For debugging purposes it can sometimes be useful to have it compile to non-minified css which can also be placed in /dist/css.
