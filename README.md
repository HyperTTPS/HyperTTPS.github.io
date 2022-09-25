
# Design Decisions
This section will detail the decisions that was made regarding the design of the website's systems - the graphical design will not be discussed here.

### Normalizing CSS
A normalize scss file was created to reduce browser inconsistencies so it's easier to provide a consistent experience across all devices. The normalization used is a copy of the opinionated version of [normalize.css](https://github.com/csstools/normalize.css). 

I thought about using a reset css file instead but a reset file aims to set all css values to nothing so that you have to manually write all css rules that you want applied. This seems like unnecessary work when an opinionated css normalization sets the values to sensible defaults so it isn't necessary to write the extra css rules manually.

### Compiled CSS is Tracked by Git
The files resulting from compiling SCSS into CSS is tracked by Git because I could not find a way to automate the compilation due to the website being hosted by GitHub Pages. GitHub Pages hosts the files on GitHub but for the files to be on GitHub it needs to be tracked by Git. I could not find a way to compile the CSS files only for the GitHub Pages deployment and keep them out of Git.

# Compilation Setup
This section will detail how the different types of files should be compiled, where the resulting compiled file should be placed and more.

## SCSS
Have your SCSS compile from src/scss/ to dist/css/ with the file extension ".css", not ".min.css". A subfolder in the scss folder should get compiled to the corresponding subfolder in the css folder, e.g. src/scss/pages/index.scss should get compiled to dist/css/pages/index.css.
This can be done with the following dart-sass command:
```
sass --style compressed --no-source-map src/scss/:dist/css/
```
You can add the `--watch` flag if you want to automatically compile the SCSS files when they're modified.

For debugging purposes, it can be useful to remove `--style compressed` to make the compiled CSS more readable but only compressed CSS should be committed to Git.
