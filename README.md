
# About
This is my portfolio website.

# Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [grunt](https://www.npmjs.com/package/grunt)
- [grunt-cli](https://www.npmjs.com/package/grunt-cli)

### Steps

Have Grunt watch for file changes so that SCSS and JS can be compiled and minified automatically:
```
grunt watch
```

# Design Decisions
This section will detail the decisions that was made regarding the design of the website's systems - the graphical design will not be discussed here.

### Normalizing CSS
A normalize scss file was created to reduce browser inconsistencies so it's easier to provide a consistent experience across all devices. The normalization used is a copy of the opinionated version of [normalize.css](https://github.com/csstools/normalize.css). 

I thought about using a reset css file instead but a reset file aims to set all css values to nothing so that you have to manually write all css rules that you want applied. This seems like unnecessary work when an opinionated css normalization sets the values to sensible defaults so it isn't necessary to write the extra css rules manually.

### Compiled CSS is Tracked by Git
The files resulting from compiling SCSS into CSS is tracked by Git because I could not find a way to automate the compilation due to the website being hosted by GitHub Pages. GitHub Pages hosts the files on GitHub but for the files to be on GitHub it needs to be tracked by Git. I could not find a way to compile the CSS files only for the GitHub Pages deployment and keep them out of Git.

# Compilation Setup
This section will detail how the different types of files should be compiled, where the resulting compiled file should be placed and more.

### Grunt

Grunt has been set up to compile SCSS into CSS and uglify JS. The specific Grunt setup can be seen in the Gruntfile.js folder in the root of the repository.
The `grunt-contrib-sass` plugin is used to compile SCSS from the src/scss folder into CSS in the dist/css folder. Thereafter, the `grunt-contrib-cssmin` plugin is used to minify this CSS but now with the ".min.css" extension. The minified CSS is placed in the same folder as the regular CSS.
The `grunt-contrib-uglify` plugin is used to uglify JS from the src/js folder into the dist/js folder.

To automatically have these plugins executed when you change the SCSS or JS files in the src folder, the `grunt-contrib-watch` plugin is used. 
